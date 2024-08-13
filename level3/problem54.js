/**
 * In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:
 *
 * High Card: Highest value card.
 * One Pair: Two cards of the same value.
 * Two Pairs: Two different pairs.
 * Three of a Kind: Three cards of the same value.
 * Straight: All cards are consecutive values.
 * Flush: All cards of the same suit.
 * Full House: Three of a kind and a pair.
 * Four of a Kind: Four cards of the same value.
 * Straight Flush: All cards are consecutive values of same suit.
 * Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
 * The cards are valued in the order:
 * 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.
 *
 * If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.
 *
 * Consider the following five hands dealt to two players:
 * Hand Player 1              Player 2               Winner
 *  1   5H 5C 6S 7S KD        2C 3S 8S 8D TD         Player 2
 *      Pair of fives         Pair of eights
 *  2   5D 8C 9S JS AC        2C 5C 7D 8S QH         Player 1
 *      Highest card Ace      Highest card queen
 *  3   2D 9C AS AH AC        3D 6D 7D TD QD         Player 2
 *      Three Aces            Flush with Diamonds
 *  4   4D 6S 9H QH QC        3D 6D 7H QD QS         Player 1
 *      Pair of Queens        Pair of Queens
 *      Highest card Nine     Highest card Seven
 *  5   2H 2D 4C 4D 4S        3C 3D 3S 9S 9D         Player 1
 *      Full House            Full House
 *      With Three Fours      with Three Threes
 */
const fs = require('fs');
const path = require('path');

const CARD_RANK_MAP = {
    2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
    T: 10, J: 11, Q: 12, K: 13, A: 14
};

function getMaxCardRank(cards) {
    return Math.max(...cards.map(card => CARD_RANK_MAP[card[0]]));
}

function getCardGroups(cards) {
    return cards.reduce((groups, card) => {
        if (!groups[card[0]]) {
            groups[card[0]] = [];
        }
        groups[card[0]].push(card);
        return groups;
    }, {});
}

function getHighCardScore(player1Cards, player2Cards) {
    const player1CardGroups = getCardGroups(player1Cards);
    const player2CardGroups = getCardGroups(player2Cards);
    const player1RemainingCards = Object.keys(player1CardGroups).filter(card => player1CardGroups[card].length === 1);
    const player2RemainingCards = Object.keys(player2CardGroups).filter(card => player2CardGroups[card].length === 1);
    return Math.max(...player1RemainingCards.map(card => CARD_RANK_MAP[card])) > Math.max(...player2RemainingCards.map(card => CARD_RANK_MAP[card])) ? 1 : 0;
}

function isFlush(cards) {
    return Object.keys(cards.reduce((units, card) => {
        if (!units[card[1]]) {
            units[card[1]] = 0;
        }
        units[card[1]]++;
        return units;
    }, {})).length === 1;
}

function isStraight(cards) {
    if (new Set(cards.map(card => card[0])).size !== 5) {
        return false;
    }
    const cardRanks = cards.map(card => CARD_RANK_MAP[card[0]]);
    cardRanks.sort();
    for (let i = 0; i < cardRanks.length - 1; i++) {
        if (cardRanks[i] + 1 !== cardRanks[i + 1]) {
            return false;
        }
    }
    return true;
}

function isRoyalFlush(cards) {
    const royalFlushCards = ['T', 'J', 'Q', 'K', 'A'];
    for (const card of cards) {
        if (!royalFlushCards.includes(card[0])) {
            return false;
        }
        royalFlushCards.splice(royalFlushCards.indexOf(card[0]), 1);
    }
    return true;
}

function getRoyalFlushScore(cards) {
    if (!isFlush(cards) || !isRoyalFlush(cards)) {
        return 0;
    }
    return 1;
}

function getStraightFlushScore(cards) {
    if (!isFlush(cards) || !isStraight(cards)) {
        return 0;
    }
    return getMaxCardRank(cards);
}

function getFourOfAKindScore(cards) {
    const cardGroups = getCardGroups(cards);
    const fourOfAKindCard = Object.keys(cardGroups).find(card => cardGroups[card].length === 4);
    if (!fourOfAKindCard) {
        return 0;
    }
    return CARD_RANK_MAP[fourOfAKindCard];
}

function getFullHouseScore(cards) {
    const cardGroups = getCardGroups(cards);
    if (Object.keys(cardGroups).length !== 2) {
        return 0;
    }
    const twoOfAKindCard = Object.keys(cardGroups).find(card => cardGroups[card].length === 2);
    const threeOfAKindCard = Object.keys(cardGroups).find(card => cardGroups[card].length === 3);

    return Math.pow(10, 3) * CARD_RANK_MAP[threeOfAKindCard] + Math.pow(10, 2) * CARD_RANK_MAP[twoOfAKindCard];
}

function getFlushScore(cards) {
    if (!isFlush(cards)) {
        return 0;
    }
    return getMaxCardRank(cards);
}

function getStraightScore(cards) {
    if (!isStraight(cards)) {
        return 0;
    }
    return getMaxCardRank(cards);
}

function getThreeOfAKindScore(cards) {
    const cardGroups = getCardGroups(cards);
    const threeOfAKindCard = Object.keys(cardGroups).find(card => cardGroups[card].length === 3);
    if (!threeOfAKindCard) {
        return 0;
    }
    return CARD_RANK_MAP[threeOfAKindCard];
}

function getTwoPairsScore(cards) {
    const cardGroups = getCardGroups(cards);
    const twoPairsGroups = Object.keys(cardGroups).filter(card => cardGroups[card].length === 2);
    if (twoPairsGroups.length !== 2) {
        return 0;
    }
    return CARD_RANK_MAP[twoPairsGroups[0]] + CARD_RANK_MAP[twoPairsGroups[1]];
}

function getOnePairScore(cards) {
    const cardGroups = getCardGroups(cards);
    const onePairCards = Object.keys(cardGroups).filter(card => cardGroups[card].length === 2);
    if (onePairCards.length !== 1) {
        return 0;
    }
    return CARD_RANK_MAP[onePairCards[0]];
}

function getPlayer1Score(player1Cards, player2Cards) {
    const player1RoyalFlushScore = getRoyalFlushScore(player1Cards);
    const player2RoyalFlushScore = getRoyalFlushScore(player2Cards);
    if (player1RoyalFlushScore > player2RoyalFlushScore) {
        return 1;
    }
    if (player1RoyalFlushScore < player2RoyalFlushScore) {
        return 0;
    }
    const player1StraightFlushScore = getStraightFlushScore(player1Cards);
    const player2StraightFlushScore = getStraightFlushScore(player2Cards);
    if (player1StraightFlushScore > player2StraightFlushScore) {
        return 1;
    }
    if (player1StraightFlushScore < player2StraightFlushScore) {
        return 0;
    }
    const player1FourOfAKindScore = getFourOfAKindScore(player1Cards);
    const player2FourOfAKindScore = getFourOfAKindScore(player2Cards);
    if (player1FourOfAKindScore > player2FourOfAKindScore) {
        return 1;
    }
    if (player1FourOfAKindScore < player2FourOfAKindScore) {
        return 0;
    }
    if (player1FourOfAKindScore > 0) {
    }
    const player1FullHouseScore = getFullHouseScore(player1Cards);
    const player2FullHouseScore = getFullHouseScore(player2Cards);
    if (player1FullHouseScore > player2FullHouseScore) {
        return 1;
    }
    if (player1FullHouseScore < player2FullHouseScore) {
        return 0;
    }
    const player1FlushScore = getFlushScore(player1Cards);
    const player2FlushScore = getFlushScore(player2Cards);
    if (player1FlushScore > player2FlushScore) {
        return 1;
    }
    if (player1FlushScore < player2FlushScore) {
        return 0;
    }
    const player1StraightScore = getStraightScore(player1Cards);
    const player2StraightScore = getStraightScore(player2Cards);
    if (player1StraightScore > player2StraightScore) {
        return 1;
    }
    if (player1StraightScore < player2StraightScore) {
        return 0;
    }
    const player1ThreeOfAKindScore = getThreeOfAKindScore(player1Cards);
    const player2ThreeOfAKindScore = getThreeOfAKindScore(player2Cards);
    if (player1ThreeOfAKindScore > player2ThreeOfAKindScore) {
        return 1;
    }
    if (player1ThreeOfAKindScore < player2ThreeOfAKindScore) {
        return 0;
    }
    if (player1ThreeOfAKindScore > 0) {
        return getHighCardScore(player1Cards, player2Cards);
    }
    const player1TwoPairsScore = getTwoPairsScore(player1Cards);
    const player2TwoPairsScore = getTwoPairsScore(player2Cards);
    if (player1TwoPairsScore > player2TwoPairsScore) {
        return 1;
    }
    if (player1TwoPairsScore < player2TwoPairsScore) {
        return 0;
    }
    if (player1TwoPairsScore > 0) {
        return getHighCardScore(player1Cards, player2Cards);
    }
    const player1OnePairScore = getOnePairScore(player1Cards);
    const player2OnePairScore = getOnePairScore(player2Cards);
    if (player1OnePairScore > player2OnePairScore) {
        return 1;
    }
    if (player1OnePairScore < player2OnePairScore) {
        return 0;
    }
    if (player1OnePairScore > 0) {
        return getHighCardScore(player1Cards, player2Cards);
    }
    const player1CardRanks = player1Cards.map(card => CARD_RANK_MAP[card[0]]);
    const player2CardRanks = player2Cards.map(card => CARD_RANK_MAP[card[0]]);
    player1CardRanks.sort((a, b) => b - a);
    player2CardRanks.sort((a, b) => b - a);
    for (let i = 0; i < player1CardRanks.length; i++) {
        if (player1CardRanks[i] > player2CardRanks[i]) {
            return 1;
        }
        if (player1CardRanks[i] < player2CardRanks[i]) {
            return 0;
        }
    }
    return 0;
}

function getPlayer1WinCount() {
    const hands = fs.readFileSync(path.join(__dirname, 'helper', 'poker.txt'), 'utf-8');
    let count = 0;
    hands.split('\n').filter(game => game.split(' ').length === 10).forEach((game, index) => {
        const cards = game.split(' ');
        const player1Cards = cards.slice(0, 5);
        const player2Cards = cards.slice(5);
        const player1Score = getPlayer1Score(player1Cards, player2Cards);
        // 6H 4H 5C 3H 2H 3S QH 5S 6S AS
        count += player1Score;
    });
    return count;
}

const now = Date.now();

console.log(getPlayer1WinCount()); // 376

console.log(require('../utils/time')(now));
