---
title: The DynamoDB Book - Book Review
description: Supercharge your Data Modeling
tags:
    [
        backend,
        book,
        databases,
        fundamentals,
        learning,
        recommended-learning-fundamentals,
    ]
author: Derek Kershner
author_title: CTO
author_url: https://github.com/dkershner6
author_image_url: https://avatars.githubusercontent.com/u/25798427?v=4
---

import buildImageUrl from "../src/util/buildImageUrl";

# The DynamoDB Book

by Alex DeBrie

<div
    style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
    }}
>
    <img src={buildImageUrl("dynamodbbook.png")} height="250" />
</div>

## TLDR

-   This book aims to help you data model for DynamoDB. This is a worthy adversary, your attention to detail up front is well-warranted.
-   The rules posited in this book are the impetus for the patterns behind our own models. The explanations are very detailed and easy to follow.
-   AWS-Famous Rick Houlihan approves, the godfather of hideous, but effective data modeling (yes, this book will feel gross at first).

## Why?

Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey.

In addition, DynamoDB has some of its own quirks (things like Billing), and it talks about all of them in great detail.

One of my favorite parts of this book is when it talks about optimizations NOT being worth it, and to favor simplicity in these cases.

<!--truncate-->

## Who should read?

This book is basically required reading for anyone working in the backend. We use DynamoDB VERY heavily, and this book does the most comprehensive job of explaining it of any resource I have come in contact with.

## Important Concepts

### Make Naming and Usage of PK/SK 100% Consistent

This was probably the largest and most impactful takeaway from this book. Forget saving space, just create more fields and name them exactly the same every single time.

### Relationships in a Non-RDBMS

Relationships are managed in application code for key-value stores, but this book establishes patterns to help you create code to more firmly and obviously declare these in code.

## Engineer Reactions

_Feel free to post comments_
