// Type definitions for boom
// Project: https://github.com/felipernb/algorithms.js
// Definitions by: Ivan Juarez N. https://github.com/radixzz
// Definitions: https://github.com/radixzz/algorithms-ts-definitions


declare module "algorithms" {

    export interface IComparator {
        compare: ( a, b ) => number;
        lessThan: ( a, b ) => boolean;
        lessThanOrEqual: ( a, b ) => boolean;
        greaterThan: ( a, b ) => boolean;
        greaterThaOrEqual: ( a, b ) => boolean;
        equal: ( a, b ) => boolean;
        reverse(): () => void;
    }

    export module DataStructures {
        
        export interface ILinkedListNode {
            value: any;
            next: ILinkedListNode;
            prev: ILinkedListNode;
        }

        export class LinkedList {
            readonly length: number;
            readonly head: ILinkedListNode;

            /** Returns whether the list is empty */
            isEmpty(): boolean;

            /** Adds the element to the end of the list or to the desired index */
            add( value: any, index: number );

            /** Returns the value associated to the Node on the given index */
            get( index: number ): any;

            /** Returns the element at the specified index  O(n) */
            getNode( index: number ): ILinkedListNode;

            /** Removes the element at the specified index */
            del( index: number );

            /** Removes the element by a given node */
            delNode( node: ILinkedListNode );

            /** Performs the fn function with each element in the list */
            forEach( func: ( value: any )=> void );

        }

        export class Queue {

            /** Returns whether the queue is empty */
            isEmpty(): boolean;

            /** Adds element to the end of the queue */
            push( value: any );

            /** Pops the element in the beginning of the queue */
            pop(): any;

            /** Returns the object at the beginning of the Queue<T> without removing it. */
            peek(): any;

            /** Performs the fn function with each element in the list */
            forEach( func: ( value: any )=> void );

        }

        export class Stack extends Queue {
            /** Adds element to the top of the stack */
            push( value: any );
        }

        export class HashTable {
            readonly capacity: number;
            readonly size: number;
            constructor( initialCapacity?: number );
            hash( value: string ): string;
            get( key: string ): any;
            put( key: string, value: any );
            del( key: string );
            forEach( func: ( key: string, value: any )=> void );
        }

        export class HashSet {
            readonly size: number;
            add( ...args: any[] ): HashSet;
            remove(...args: any[] ): HashSet;
            contains( el: string );
            forEach( func: ( key: string, value: any )=> void );
        }

        export module Heap {
            export class MinHeap {
                constructor( comparatorFunction?: IComparator )
                /** Returns whether the heap is empty */
                isEmpty(): boolean;
                insert( value: number | any );
                extract(): number | any;
            }

            export class MaxHeap extends MinHeap {}
        }

        export class AVLTree {}
        export class BST {}
        export class DisjointSetForest {}
        export class FenwickTree {}
        export class Graph {
            constructor( directed: boolean );
            addVertex( label: string );
            addEdge( labelA: string, labelB: string, value: number );
            neighbors( label: string );
            edge( labelA: string, labelB: string );
        }
        export class PriorityQueue {}
        export class Set {}
        export class Treap {}
    }

    export module Geometry {
        export interface IPoint {
            x: number;
            y: number;
        }
        export class BezierCurve {
            constructor( points: IPoint[] );
            /** t Number float variable from 0 to 1 */
            get( t: number ): IPoint;
        }
    }

    export module Graph {
        export class SPFA {
            constructor( graph: DataStructures.Graph, start: any );
        }
        export function bellmanFord();
        export function bfsShortestPath();
        export function breadthFirstSearch();
        export function depthFirstSearch();
        export function dijkstra();
        export function eulerPath();
        export function floydWarshall();
        export function kruskal();
        export function prim();
        export function topologicalSort();
    }

    export module Math {
        export function collatzConjecture();
        export function extendedEuclidean();
        export function fastPower();
        export function fibonacci();
        export function fisherYates();
        export function gcd();
        export function greatestDifference();
        export function lcm();
        export function newtonSqrt();
        export function nextPermutation();
        export function powerSet();
        export function primalityTests();
        export function reservoirSampling();
        export function shannonEntropy();
    }
    export module Search {
        export function bfs();
        export function binarySearch();
        export function dfs();
        export function ternarySearch();
    }
    export module Sorting {
        export function bubbleSort();
        export function countingSort();
        export function heapSort();
        export function insertionSort();
        export function mergeSort();
        export function quicksort();
        export function radixSort();
        export function selectionSort();
        export function shellSort();
        export function shortBubbleSort();
        export function shortBubbleSort();
    }

    export module String {
        export function hamming();
        export function huffman();
        export function knuthMorrisPratt();
        export function levenshtein();
        export function longestCommonSubsequence();
        export function longestCommonSubstring();
        export function rabinKarp();
    }
}
