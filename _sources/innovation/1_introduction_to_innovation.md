# Introduction to Innovation

<!--```{contents}
:local:
:depth: 2
```
-->

```{admonition} Learning outcomes

The learning outcomes of this chapter are:

1. Explain what **innovation** means.
2. Describe the difference between product development and customer development.
3. Apply the design thinking process to **empathise**, **define** problems, and **generate** and **test** ideas.
4. Describe the difference between **refining** products and **pivoting** strategy.
```

In this section, we define what we mean by **innovation**. This may seem strange -- I'm sure you have all used the word. But in my experience, when I talk with people in technology-related fields saying they "do innovation", they often are just using the latest software tools, techniques, or frameworks. This is, most definitely, not being innovative (although in doing innovation, we may sometimes use the latest tools).

## What is innovation?

```{admonition} Definition --- Innovation
Innovation is about **creating value for someone**.
```

**What does it mean to create value?** 

This can be in the form of:
* New solutions to real-world problems.
* Old solutions given to a new group of customers.
* Deriving new methods to solve new of existing problems.

The two important terms though are: **value** and **someone**.

If a solution does not help people, they will not use it. It doesn't matter how sophisticated or cutting edge the solution is. People will only pay for and use products/services that help them.

> "Quality in a product or service is not what the supplier puts in. It is what the customer gets out and is willing to pay for. A product is not quality because it is hard to make and costs a lot of money, as manufacturers typically believe. This is incompetence. Customers pay only for what is of use to them and gives them value. Nothing else constitutes quality." -- Peter Drucker.

The term **innovation** can also refer to the process for creating value. This is the focus on this course: the processes that people follow to innovate.

## The Innovation Process

In this course, we will follow an innovation processed called **Lean startup**, based on the book by Steve Blank[^four-steps], and with inspiration throughout the course from other innovation experts such as Tina Seelig[^seelig] and Alexander Osterwalder and Yves Pigneur[^osterwalder].

**Why do we need to follow a process? What we just come up with ideas?** Ideas are simple. Implementation is hard. What happens if we take the time to implement our idea, and it turns out that *nobody wants it*? What a waste of time! (And perhaps a waster of money/funds too!). 

Innovation processes help us to test our ideas, drop them early if they don't create value, and change them to something more valuable.

**Importantly**, just because **we think** our idea will bring people value does not mean it will. In fact, most ideas that people believe are great never do.

> "Ideas are like babies because everyone thinks theirs is cute, therefore be objective when judging your own ideas." -- Tina Seelig

The Lean Startup approach is a collection of methods for helping us objectively judging our ideas.

## (Software) product development

```{figure} ./figs/product_development_process.png
---
width: 600px
name: fig:product_development_process
---
The product development process[^four-steps]
```

{numref}`fig:product_development_process` shows the standard product development process: (1) come up with a concept for a product that we think is good; (2) develop the product; (3) test and evaluate it; and (4) launch it. 


```{note}
Throughout these notes, we use the term "product" to mean "products and services", as a service is simply an intangible product.
```

This can work if the problem is well understood and the solution is clear.  However, this is not often the case.

Often, the focus on product development becomes the launch date. Marketing, execution, and hiring is all predicated on a business plan that is making incorrect assumptions.

If we follow this product development process, **we won't know we are wrong until we are out of business**.

## Product and business failure

According to the [latest](https://www.standishgroup.com/sample_research_files/CHAOSReport2015-Final.pdf) public [Standish Group report](https://www.standishgroup.com/news/45), about 20\% of all software projects fail. About 35-40\% of projects are **successful**, which means that they are on time, on budget, and deliver a satisfactory result. The remaining 40-45\% are **challenged**, which means they run over time, over budget, or don't deliver something satisfactory. Larger projects fail more often. These are high failure rates! 


Results are worse for startup companies. Over [90\% of startups fail](https://www.luisazhou.com/blog/businesses-that-fail/), with 50\% failing within 5 years. CB Insights data indicates that they fail mostly due to lack of cash flow and not having the right market fit:

| Failure reason          | Percentage |
|-------------------------|------------|
| Cash flow               | 38%        |
| No market fit           | 35%        |
| Competition             | 20%        |
| Business model          | 19%        |
| Regulatory challenges   | 18%        |
| Pricing issues          | 15%        |
| Team                    | 14%        |
| Timing                  | 10%        |

Interestingly, most of the issues above are NOT product development issues. Market fit accounts for one third; and one can argue that cash flow failures would be lower if people could have early release product that fit the market or show their investors that they had a great market fit for their product. This latter argument about "investors" holds where the "investors" are people in our organisation who have the ability to provide funding to our projects.

**If** products fail due to a lack of customers rather than product development failures, then why do we have:
* a process to manage product development; 
* no process to manage customer development.

There is an inexpensive and simple fix:

<p align="center">
    <strong>Focus on customers and markets from day one.</strong>
</p>

## From (software) product development to (software) innvation

To use software as an example, innovation differs from product development in four different ways. It takes us:

1. **From a client to a market segment:** We focus much less on specific clients for whom we build the product. Instead, we have to identify a **market** -- a segment of the population who would be paying customers for our idea. If we are innovating within an organisation, we still need to identify who our "market" is to justify budget spend.

2. **From a system to a value proposition:** We focus much less on a particular system or solution, we focus on identify what will bring value to our market.

3. **From Requirements Specification to a Minimal Viable Product:** We focus much less on identifying the requirements for a product, to identifying the smallest amount of functionality that we believe can bring value, so we can test our idea.

4. **From Development to Experimentation:** We focus much less on the lifecycle of developing a software solution, and much more on **experimenting** with our ideas by "**getting out of the building**" and talking to peopel in our market segment, gaining feedback on our ideas.

(sec:intro:customer_development)=
## A customer development process: the four steps

>"What you will get wrong is that you will not pay enough attention to your users.

> You will make up some idea in your own head that you will call your "vision", and you will spend a lot of time thinking about your vision. In a cafe. By yourself. And build some elaborate thing without going and talking to users, because that's doing sales, which is a pain in the ass, and they might say no.

> You will not ship fast enough because you're embarrassed to ship something unfinished, and you don't want to face the likely feedback that you will get from shipping. You will shrink from contact with the real world, contact with your users. That's the mistake you will make." -- Paul Graham

```{figure} ./figs/leave_the_room_cartoon.jpg
From [Talking to humans](https://www.talkingtohumans.com/cartoons.html). Credit to Tom Fishburne.
```

The customer development proess, shown in {numref}`fig:customer_development_process`, is not a replacement for the product development process -- it supplements it. While the focus is on customers, we still need to deliver products.

```{figure} ./figs/customer_development_process.png
---
name: fig:customer_development_process
---
The customer development process[^four-steps]
```

Customer development has four steps:

1. **Customer discovery** finds out who our potential customers are and what their prolems are. This captures the innovators' vision and turns it into a set of testable hypotheses. Then it develops a plan to test those hypotheses and turn them into **facts**.
2. **Customer validation** evaluates whether we have actually found a group of customers and a product that they would pay for. This tests whether the resulting innovation is repeatable and scalable. If not, return to customer discovery.
3. **Customer creation** is the start of execution. It builds end-user demand and drives it into the sales channel to scale the business.
4. **Company building** transitions the organization from a innovation unit to a company focused on executing a validated business model.

Note that, as outlined in {numref}`fig:customer_development_process`, step is itself iterative --- developing customers is not a one-off or even a linear process. Further, going back from customer validation to customer discover is encouraged when we find that we have not understood our customers properly.

In this course, we will focus on the first two steps: customer discovery and customer validation.

These two steps are crucial to any innovation project, whether to start up a new company, innovation new products in existing companies, or internal projects at organisations.

## Design thinking

```{note}
There are no facts inside our building that can help us understand our customers, so we need to **get outside of the building**. 
```

To execute each of the steps in the customer development process, we can adopt the **design thinking process**, as outlined in {numref}`fig:design_thinking_process`. 

```{figure} ./figs/design_thinking_process.png
---
height: 300px
name: fig:design_thinking_process
---
The design thinking process
```

The design thinking process is an iterative process broken into five steps:

1. **Empathise** with people who are our prospective users/customers. To **empathise** with someone is not to **sympathise** with someone; or just to **care** about someone. Empathy is an understanding that we develop aobut another person, and is empathy is built by deeply **listening** to someone to understand their thoughts and the reasons for their behaviour. In innovation, empathising is the process of understanding people's problems, why they consider them problems, and how these issues impact their lives. Empathising helps use to gain insights into the needs and desires of people, which can really help us to come up with meaningful solutions.

    Watch [this killer 5-minute video of what empathy really means](https://vimeo.com/manage/videos/271035075) from our colleague Professor Tim Kastelle, Director of the Andrew N. Liveris Academy for Innovation and Leadership at the University of Queensland.


2. **Define** the problems that our demographic has, based on the understanding that we got from emphasising. Be sure to pay attention to the people and what they said; and importantly, this is not about up with solutions. We will discuss later how to make these definitions specific and actionable.

3. **Ideate** to come up with concrete ideas that address the problem. "Ideation" is a term that sounds like it comes from a charlatan's toolbox because a lot of people use it meaninglessly, but it just means to generate, develop, and communicate ideas. . We can use a range of creativity techniques, such as brainstorming, mind mapping, collaborative workshops, and co-design. The important part of this step is to first generate as many ideas as possible without critiqueing them, and then after this, select the set of most promising ideas.

4. **Prototype** the best ideas into simple, inexpensive prototypes. A prototype is a preliminary version of a product that is used to gain feedback on ideas. Even in software products, a prototype need not be an actualy piece of software. Simple prototypes such as storyboards, or even simply statements of what the problem is, can be tested with our customers.

5. **Test** our prototype with potential customers to get feedback on whether we have understood the problem and generated useful ideas. It is important at this step that we **do not try to sell** our idea or prototype --- we simple want to get feedback.

```{note}
The design thinking process is **iterative**. When we test prototypes with our demographic, we can a change to learn from them by empathising. From a feedback session, we should gain new insights and a better understanding of the demographic we are working with, and their problems.
```

### Lean start-up vs. design thinking vs. product development

| Factor	| Lean Startup | Design Thinking | Product Development   |
|-----------|--------------|-----------------|-----------------------|
| Philosophy| Fail early, learn | User-centred | Product quality     |
| Goals     | Finding a market and business model | Solving user problems | Deliverying a quality product |
| Approach	| Hypothesis-driven	| Empathy, ideation, prototyping | Stage-gate process, often iterative for software |
| Assumptions | Initially, we know nothing | We know our customers/users | We know what product to build |
| Iteration |	Rapid, continuous  | Regular, feedback-driven prototyping | Often limited, but can be agile |
| Time to Market | Short, focuses quick feedback |	Variable, depends on iteration cycles | Longer, detailed planning and development phases |
| Techniques |	Hypothesis testing, MVP, |	Empathy maps, journey maps, brainstorming, prototyping	| Requirements analysis, detailed design, testing |
| Outcome	| Product with validated market fit | Innovative solutions that address user needs |	Fully developed, feature-rich product |

The above table summarises the differences between the Lean startup approach, design thinking, and product development. Each process has a different philosophy, goals, approaches, techniques, etc. 

**However**, we needn't think of these as competing processes -- they are complementary. When starting-up a  new product, we need to work closely with a product development team, and we can use design thinking for many of the steps that we use.

(sec:intro:pivot_vs_refine)=
## Pivot vs. refine

What happens if we test an idea and it turns out we are wrong about our customers and their problems?

Well, we need to come up with new ideas!

But first, we need to be careful not to simply throw away everything we have learnt.



{numref}`fig:pivot_vs_refine` shows how Eric Ries[^ries] conceptualises product innovation. The **vision** is what he calls the "true north" -- this is how we believe the world could exist. To achieve our vision, we need a **strategy**, which includes the understanding of our customers, partners, and competitors, the ideas we have about our customers' problems, and the roadmap for our product. The **product** is the result of implementing the strategy.



```{figure} ./figs/pivot_vs_refine.png
---
height: 300px
name: fig:pivot_vs_refine
---
Pivoting vs. refining when we learn our ideas won't work[^ries]
```

When we test our ideas and find out they are wrong, **we should treat this as an opportunity to learn, not as a complete failure**.



## Takeaways

```{admonition} Takeaways
1. Innovation is about **creating value for someone**. It is not about using the latest technology, wearing turtleneck jumpers, or only coming up with ideas.

2. Most startups, business, and products fail because people **do not understand their market**.

3. Successful innovators **get out of the building** to **understand their customers and their customers' problems**.

4. Successful innovation is about **generating and testing ideas early** so we can **fail early**.

5. When our ideas fail, we can **use this as an opportunity to learn**, and then either **refine our product** or  **pivot our strategy**.
```          

## References

[^four-steps] Blank, Steve. *The four steps to the epiphany: successful strategies for products that win*. John Wiley & Sons, 2020.

[^blank_and_dorf] Blank, Steve, and Bob Dorf. *The startup owner's manual: The step-by-step guide for building a great company*. John Wiley & Sons, 2020.

[^seelig] Seelig, Tina. *inGenius: A crash course on creativity*. Hay House, Inc, 2012.

[^osterwalder] Osterwalder, Alexander, and Yves Pigneur. *Business model generation: a handbook for visionaries, game changers, and challengers*. Vol. 1. John Wiley & Sons, 2010. [https://www.strategyzer.com/](https://www.strategyzer.com/)

[^ries] Ries, Eric. *The lean startup: How today's entrepreneurs use continuous innovation to create radically successful businesses*. Crown Currency, 2011.
