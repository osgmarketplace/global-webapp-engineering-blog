---
title: Refactoring - Book Review
description: Improving the Design of Existing Code
tags:
    [
        backend,
        book,
        code-quality,
        frontend,
        learning,
        maintenance,
        recommended-learning,
    ]
author: Derek Kershner
author_title: CTO
author_url: https://github.com/dkershner6
author_image_url: https://avatars.githubusercontent.com/u/25798427?v=4
---

import buildImageUrl from "../src/util/buildImageUrl";

# Refactoring

by Martin Fowler, with Kent Beck

<div
    style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
    }}
>
    <img src={buildImageUrl("refactoring.jpg")} height="250" />
</div>

## TLDR

-   This book aims to help you produce code that easier to understand (by humans)
-   It uses JavaScript for its examples, as opposed to most books that use Java.
-   It does a fantastic job of explaining both the why and how of each pattern, and the list is very comprehensive.

## Why?

This book correctly identifies code smells and which pattern to implement for each. Following the advice will undoubtably lift your code quality, improving the lives of you and your fellow developers. It also discusses unit testing, and how correctly organized code vastly simplifies the process of Test Driven Development.

<!--truncate-->

## Who should read?

This book is fantastic for all Software Engineers, period. It is a great replacement for the older "Clean Code" book, and has both updated the patterns and use cases, but also the examples to use JavaScript rather than Java, which has obvious advantages for TypeScript devs.

## Important Concepts

### Code Smells

These are when you look at code, and you know something is not right. The book has seventy refactorings, and code smells to go along with each. It can be used in somewhat "handbook" fashion, but eventually this will become very natural to you and your results will speed up significantly.

### Test Driven Development

We all have heard, and know, we should be using unit tests, and that we should probably be using test-driven development. There are exceptions for things like prototyping, but generally any application of significant size that is in production benefits greatly.

This book takes away all excuses for not using TDD, and provides strategies that feel so natural, you will be essentially getting unit tests for free. It takes some initial discipline and willpower, but in my opinion, the results are well worth it.

## Engineer Reactions

_Feel free to post comments_
