# React useEffect Cleanup Issue

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function isn't consistently called when a component unmounts.  This can lead to memory leaks or unexpected behavior if not handled correctly.

## Problem

The `bug.js` file contains a React component that uses `useEffect` with a cleanup function.  Under normal circumstances, this cleanup function should be executed when the component is unmounted. However, under specific conditions such as rapid component updates or other lifecycle interference, the cleanup might be skipped, causing the issue.

## Solution

The `bugSolution.js` file provides a corrected version of the component. This solution emphasizes proper use of the cleanup function and avoids scenarios where premature unmounting or state changes might interfere with the cleanup process.