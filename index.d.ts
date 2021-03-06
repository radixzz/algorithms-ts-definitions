// Type definitions for algorithms.js
// Project: https://github.com/felipernb/algorithms.js
// Definitions by: Ivan Juarez N. https://github.com/radixzz
// Definitions: https://github.com/radixzz/algorithms-ts-definitions


declare module "algorithms" {

    export interface IComparator {
        compare: ( a: any, b: any ) => number;
        lessThan: ( a: any, b: any ) => boolean;
        lessThanOrEqual: ( a: any, b: any ) => boolean;
        greaterThan: ( a: any, b: any ) => boolean;
        greaterThaOrEqual: ( a: any, b: any ) => boolean;
        equal: ( a: any, b: any ) => boolean;
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
            readonly tail: ILinkedListNode;

            /** Returns whether the list is empty */
            isEmpty(): boolean;

            /** Adds the element to the end of the list or to the desired index */
            add( value: any, index: number ): void;

            /** Returns the value associated to the Node on the given index */
            get( index: number ): any;

            /** Returns the element at the specified index  O(n) */
            getNode( index: number ): ILinkedListNode;

            /** Removes the element at the specified index */
            del( index: number ): void;

            /** Removes the element by a given node */
            delNode( node: ILinkedListNode ): void;

            /** Performs the fn function with each element in the list */
            forEach( func: ( value: any )=> void ): void;

        }

        export class Queue {

            /** Returns whether the queue is empty */
            isEmpty(): boolean;

            /** Adds element to the end of the queue */
            push( value: any ): void;

            /** Pops the element in the beginning of the queue */
            pop(): any;

            /** Returns the object at the beginning of the Queue<T> without removing it. */
            peek(): any;

            /** Performs the fn function with each element in the list */
            forEach( func: ( value: any )=> void ): void;

        }

        export class Stack extends Queue {
            /** Adds element to the top of the stack */
            push( value: any ): void;
        }

        export class HashTable {
            readonly capacity: number;
            readonly size: number;
            constructor( initialCapacity?: number );
            hash( value: string ): string;
            get( key: string ): any;
            put( key: string, value: any ): void;
            del( key: string ): void;
            forEach( func: ( key: string, value: any )=> void ): void;
        }

        export class Set {
            readonly size: number;
            add( ...args: any[] ): Set;
            remove(...args: any[] ): Set;
            contains( el: string ): boolean;
            forEach( func: ( key: string, value: any )=> void ): void;
        }

        export module Heap {
            export class MinHeap {
                constructor( comparatorFunction?: IComparator )
                /** Returns whether the heap is empty */
                isEmpty(): boolean;
                insert( value: number | any ): void;
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
            addVertex( label: string ): void;
            addEdge( labelA: string, labelB: string, value: number ): void;
            neighbors( label: string ): void;
            edge( labelA: string, labelB: string ): void;
        }
        export class PriorityQueue {}
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
        export function bellmanFord(): any;
        export function bfsShortestPath(): any;
        export function breadthFirstSearch(): any;
        export function depthFirstSearch(): any;
        export function dijkstra(): any;
        export function eulerPath(): any;
        export function floydWarshall(): any;
        export function kruskal(): any;
        export function prim(): any;
        export function topologicalSort(): any;
    }

    export module Math {
        export function collatzConjecture(): any;
        export function extendedEuclidean(): any;
        export function fastPower(): any;
        export function fibonacci(): any;
        export function fisherYates(): any;
        export function gcd(): any;
        export function greatestDifference(): any;
        export function lcm(): any;
        export function newtonSqrt(): any;
        export function nextPermutation(): any;
        export function powerSet(): any;
        export function primalityTests(): any;
        export function reservoirSampling(): any;
        export function shannonEntropy(): any;
    }
    export module Search {
        export function bfs(): any;
        export function binarySearch(): any;
        export function dfs(): any;
        export function ternarySearch(): any;
    }
    export module Sorting {
        export function bubbleSort(): any;
        export function countingSort(): any;
        export function heapSort(): any;
        export function insertionSort(): any;
        export function mergeSort(): any;
        export function quicksort(): any;
        export function radixSort(): any;
        export function selectionSort(): any;
        export function shellSort(): any;
        export function shortBubbleSort(): any;
        export function shortBubbleSort(): any;
    }

    export module String {
        export function hamming(): any;
        export function huffman(): any;
        export function knuthMorrisPratt(): any;
        export function levenshtein(): any;
        export function longestCommonSubsequence(): any;
        export function longestCommonSubstring(): any;
        export function rabinKarp(): any;
    }
}
