---
title: Building Microservices - Book Review
description: Designing Fine Grained Systems
tags: [architecture, book, learning]
author: Derek Kershner
author_title: CTO
author_url: https://github.com/dkershner6
author_image_url: https://avatars.githubusercontent.com/u/25798427?v=4
---

import buildImageUrl from "../src/util/buildImageUrl";

# Building Microservices

by Sam Newman

<div
    style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
    }}
>
    <img src={buildImageUrl("building-microservices.jpg")} />
</div>

## TLDR

-   This book aims to provide the basics on how and why to split systems into contexts.
-   It is a solid introduction and does a great job in going deeper, discussing tradeoffs in all areas, including testing, deployment, and monitoring.
-   If you remember nothing else, remember "bounded contexts" and "seams".

## Why?

This book is great for those coming from Monolithic architectures (pretty much everyone, originally) and baby-stepping through the reasons why you may want to move services to a more micro level. It is definitely written from a pro-microservices standpoint, but refrains from being preachy.

<!--truncate-->

## Who should read?

Generally the answer is everyone, but especially those more interested in the architecture career track as a basic starting point. Monolithic architectures have fallen out of style for all but the simplest applications, and for good reason. If you are unsure what these reasons are, this is a good first step.

## Important Concepts

### Bounded Contexts and Seams

These are the bread and butter of microservices, and are almost solely responsible for if a microservice is going to succeed or fail miserably. Watch closely when these things are mentioned throughout the book, but here is a quick synopsis anyway:

Seams are the lines which are drawn being (micro)services, creating contexts. If the seam is in a good location, it creates a bounded context, which is loosely defined as a collection of concepts that heavily relate to one another. I usually see this referred to as "domain".
