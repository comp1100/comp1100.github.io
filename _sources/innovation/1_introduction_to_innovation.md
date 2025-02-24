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
* Old solutions given to a new group of people.
* Deriving new methods to solve new of existing problems.

The two important terms are: **value** and **someone**.

If a solution does not help people, they will not use it. It doesn't matter how sophisticated or cutting edge the solution is. People will only pay for and use products/services that help them.

> "Quality in a product or service is not what the supplier puts in. It is what the customer gets out and is willing to pay for. A product is not quality because it is hard to make and costs a lot of money, as manufacturers typically believe. This is incompetence. Customers pay only for what is of use to them and gives them value. Nothing else constitutes quality." -- Peter Drucker.

The term **innovation** can also refer to the **process** for creating value. This is the focus on this course: the processes that people follow to create value for someone.

## The Innovation Process

In this course, we will follow an innovation processed called **Lean startup**, based on the book by Steve Blank[^four_steps], and with inspiration throughout the course from other innovation experts such as Tina Seelig[^seelig] and Alexander Osterwalder & Yves Pigneur[^osterwalder].

**Why do we need to follow a process? What we just come up with ideas?** Ideas are simple. Implementation is hard. What happens if we take the time to implement our idea, and it turns out that *nobody wants it*? What a waste of time! (And perhaps a waster of money/funds too!). 

Innovation processes help us to test our ideas, abandon or refine them if they don't create value, and change them to something more valuable -- but doing this **early** before we spend a lot of time and resources.

**Importantly**, just because **we think** our idea will bring people value does not mean it will. In fact, most ideas that people believe are great never do.

> "Ideas are like babies because everyone thinks theirs is cute, therefore be objective when judging your own ideas." -- Tina Seelig

The Lean Startup approach is a collection of methods for helping us objectively judging our ideas.

## (Software) product development

```{figure} ./figs/product_development_process.png
---
alt: "The product development process: a sequence of the stages Concept, Product development, Test, and Launch."
width: 600px
name: fig:product_development_process
---
The product development process[^four_steps]
```

{numref}`fig:product_development_process` shows the standard product development process: (1) come up with a concept for a product that we think is good; (2) develop the product; (3) test and evaluate it; and (4) launch it. 


```{note}
Throughout these notes, we use the term "product" to mean "products and services", as a service is simply an intangible product.
```

This can work if the problem is well understood and the solution is clear.  However, this is not often the case.

Often, the focus on product development becomes the launch date. Marketing, execution, and hiring is all predicated on a business plan that is making incorrect assumptions.

If we follow this product development process, **we won't know we are wrong until we launch, and then we are out of business**.

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

**If** products fail due to a lack of customers rather than product development failures, then why do we have?
* a process to manage product development; but
* no process to manage customer development.

There is an inexpensive and simple fix:

<p align="center" style="font-size:26px;">
    <strong>Focus on customers and markets from day one.</strong>
</p>

## From (software) product development to (software) innovation

To use software as an example, innovation differs from product development in four different ways. It takes us:

1. **From a client to a market segment:** We focus much less on specific clients for whom we build the product. Instead, we have to identify a **market** -- a segment of the population who would be paying customers for our idea. If we are innovating within an organisation, we still need to identify who our "market" is to justify spending budget on it.

2. **From a system to a value proposition:** We focus much less on a particular system or solution, we focus on identifying what will bring value to our market.

3. **From requirements specification to a minimal viable product:** We focus much less on identifying the requirements for a product, to identifying the smallest amount of functionality that we believe can bring value, so we can test our ideas early.

4. **From development to experimentation:** We focus much less on the life cycle of developing a software solution (at least initially), and much more on **experimenting** with our ideas by "**getting out of the building**" and talking to people in our market segment, gaining feedback on our ideas.

(sec:intro:customer_development)=
## A customer development process: the four steps

>"What you will get wrong is that you will not pay enough attention to your users.

> You will make up some idea in your own head that you will call your "vision", and you will spend a lot of time thinking about your vision. In a cafe. By yourself. And build some elaborate thing without going and talking to users, because that's doing sales, which is a pain in the ass, and they might say no.

> You will not ship fast enough because you're embarrassed to ship something unfinished, and you don't want to face the likely feedback that you will get from shipping. You will shrink from contact with the real world, contact with your users. That's the mistake you will make." -- Paul Graham

```{figure} ./figs/leave_the_room_cartoon.jpg
---
alt: "A cartoon of three people at computers in a room. Person A says: 'If I were our teenage girl target, I would love our new product'. Person B: 'Have you actually talked to any to make sure?'. Person C: 'What? And leave this room?'" 
---
From [Talking to humans](https://www.talkingtohumans.com/cartoons.html). Credit to Tom Fishburne.
```

The customer development process, shown in {numref}`fig:customer_development_process`, is not a replacement for the product development process -- it supplements it. While the focus is on customers, we still need to deliver products.

```{figure} ./figs/customer_development_process.png
---
name: fig:customer_development_process
alt: "The cusomter development process, which has four stages: customer discovery, customer validation, customer creation, and company building. Each stage is represented as a circle with arrows around it, representing that it is iterative. Each stage also has a 'stop' sign before the next phase. Arrows join the phases in order, but there is also a feedback arrow from customer validation (step 2) to customer discovery (step 1)."
---
The customer development process[^four_steps]
```

Customer development has four steps:

1. **Customer discovery** finds out who our potential customers are and what their problems are. This captures the innovators' vision and turns it into a set of testable hypotheses. Then it develops a plan to test those hypotheses and turn them into insights.
2. **Customer validation** evaluates whether we have actually found a group of customers and a product that they would pay for. This tests whether the resulting innovation is repeatable and scalable. If not, return to customer discovery.
3. **Customer creation** is the start of execution. It builds end-user demand and drives it into the sales channel to scale the business.
4. **Company building** transitions the organization from a innovation unit to a company focused on executing a validated business model.

Note that, as outlined in {numref}`fig:customer_development_process`, each step is itself iterative --- developing customers is not a one-off or even a linear process. Further, going back from customer validation to customer discover is encouraged when we find that we have not understood our customers properly.

At the end of the process, we want to be able to answer five questions:
* Have we identified a problem that a set of customers wants solved?
* Have we identified a product that solves this problems?
* Do we have a set of customers that will pay for this product?
* Do we have a profitable and viable business model to produce this product?
* Do we know enough about our product and customers to go out and sell this?

### This course

In this course, we will focus mostly on the first step: customer discovery, with some parts of customer validation. Given that we have just 15 weeks and most people enrolled in the course have three other courses, we cannot cover the entire process in any meaningful way.

The first step is crucial to any innovation project, whether to start up a new company, innovating new products in existing companies, or internal projects at organisations.

However, the ideas and processes around testing, learning, and failing early that are crucial in customer discovery are similar to the remaining steps --- the activities that we use them on vary in other phases.

## Design thinking

```{note}
There are no facts inside our building that can help us understand our customers, so we need to **get outside of the building**. 
```

To execute each of the steps in the customer development process, we can adopt the **design thinking process**, as outlined in {numref}`fig:design_thinking_process`. 

```{figure} ./figs/design_thinking_process.png
---
height: 300px
name: fig:design_thinking_process
alt: "The design thinking process. Five stages represented a circle to represent that it is iterative. The five stages are: empathise, define, ideate, prototype, and test."
---
The design thinking process
```

The design thinking process is an iterative process broken into five steps:

1. **Empathise** with people who are our prospective users/customers. To **empathise** with someone is not to **sympathise** with someone; or just to **care** about someone. Empathy is an understanding that we develop about another person, and is empathy is built by deeply **listening** to someone to understand their thoughts and the reasons for their behaviour. In innovation, empathising is the process of understanding people's problems, why they consider them problems, and how these issues impact their lives. Empathising helps use to gain insights into the needs and desires of people, which can really help us to come up with meaningful solutions.

    Watch [this killer 5-minute video of what empathy really means](https://vimeo.com/manage/videos/271035075) from my colleague Professor Tim Kastelle, Director of the Andrew N. Liveris Academy for Innovation and Leadership at the University of Queensland:

    <iframe src="https://player.vimeo.com/video/271035075?h=eef0e60f2e" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


2. **Define** the problems that our demographic has, based on the understanding that we got from emphasising. Be sure to pay attention to the people and what they said; and importantly, this is not about up with solutions. We will discuss later how to make these definitions specific and actionable.

3. **Ideate** to come up with concrete ideas that address the problem. "Ideation" is a term that sounds like it comes from a charlatan's toolbox because a lot of people use it meaninglessly, but it just means to generate and communicate ideas. We can use a range of creativity techniques, such as brainstorming, mind mapping, collaborative workshops, and co-design. The important part of this step is to first generate as many ideas as possible without critiquing them, and then after this, select the set of most promising ideas.

   Our research collaborator of mine, Professor Marek Kowalkiewicz, Chair of Digitial Economy at Queensland University of Technology points out that "creativity" is not a magic process --- all of us can be and are creative.

   Marek talks about ideating by **crafting** ideas using simple techniques. Check out [Marek's awesome TEDx talk "Creativity not required: how great minds craft ideas"](https://www.youtube.com/watch?v=iJU3KoZcUKU) on this topic.

   <iframe width="560" height="315" src="https://www.youtube.com/embed/iJU3KoZcUKU?si=jXhJp9ZZpNsXogSV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

4. **Prototype** the best ideas into simple, inexpensive prototypes. A prototype is a preliminary version of a product that is used to gain feedback on ideas. Even in software products, a prototype need not be an actually piece of software. Simple prototypes such as storyboards, or even simply statements of what the problem is, can be tested with our customers.

5. **Test** our prototype with potential customers to get feedback on whether we have understood the problem and generated useful ideas. It is important at this step that we **do not try to sell** our idea or prototype --- we simple want to get feedback.

```{note}
The design thinking process is **iterative**. When we test prototypes with our demographic, we can a change to learn from them by empathising. From a feedback session, we should gain new insights and a better understanding of the demographic we are working with, and their problems.
```

### Lean start-up vs. design thinking vs. product development

| Factor	| Lean Startup | Design Thinking | Product Development   |
|-----------|--------------|-----------------|-----------------------|
| Philosophy| Fail early, learn | User-centred | Product quality     |
| Goals     | Finding a market and business model | Solving user problems | Delivering a quality product |
| Approach	| Hypothesis-driven	| Empathy, ideation, prototyping | Stage-gate process, often iterative for software |
| Assumptions | Initially, we know nothing | We know our customers/users | We know what product to build |
| Iteration |	Rapid, continuous  | Regular, feedback-driven prototyping | Often limited, but can be agile |
| Time to Market | Short, focuses quick feedback |	Variable, depends on iteration cycles | Longer, detailed planning and development phases |
| Techniques |	Hypothesis testing, MVP |	Empathy maps, journey maps, brainstorming, prototyping	| Requirements analysis, detailed design, testing |
| Outcome	| Product with validated market fit | Innovative solutions that address user needs |	Fully developed, feature-rich product |

The above table summarises the differences between the Lean startup approach, design thinking, and product development. Each process has a different philosophy, goals, approaches, techniques, etc. 

However, we needn't think of these as competing processes -- they are **complementary**. 
We use design thinking and related techniques throughout the innovation process.
Once we our product ideae is well tested and we have a design that is both a good product-market fit and useful for users,
we use product development processes to product a quality product.


(sec:intro:pivot_vs_refine)=
## Pivot vs. refine

What happens if we test an idea and it turns out we are wrong about our customers, their problems, and/or our solution?

Well, we need to come up with new ideas!

But first, we need to be careful not to simply throw away everything we have learnt.



{numref}`fig:pivot_vs_refine` shows how Eric Ries[^ries] conceptualises product innovation. The **vision** is what he calls the "true north" -- this is how we believe the world could be if we are successful. To achieve our vision, we need a **strategy**, which includes the understanding of our customers, partners, and competitors, the ideas we have about our customers' problems, and the road map for our product. The **product** is the result of implementing the strategy.



```{figure} ./figs/pivot_vs_refine.png
---
height: 400px
name: fig:pivot_vs_refine
alt: "Pivot vs refine: A pyramid with three layers. The lowest layer is 'Vision', the middle layer is 'Strategy', and the top layer is 'Product'. From Strategy is an arrow to the word 'Pivot'; and from Product is an arrow to the word 'Refine'."
---
Pivoting vs. refining when we learn our ideas won't work[^ries]
```

When we test our ideas and find out they are wrong, **we should treat this as an opportunity to learn, not as a complete failure**.

(sec:introduction:medical_alert)=
## Running example: Medical alert systems for older people living independently

Throughout these notes, we'll use the following running example, which is a project that I worked on with some colleagues at Swinburne University when I was at The University of Melbourne.


```{figure} ./figs/emergency_alarm.jpg
---
height: 400px
name: fig:emergency_alarm
alt: "An medical alarm. There is a base station with a red button, a green button, and an antenna. There is also a wrist band"
---
An emergency alarm for older people living at home independently. Source: https://en.wikipedia.org/wiki/Medical_alarm#/media/File:Rufhilfeger%C3%A4t-vitaris_S.A.M._4_GSM.jpg. License:CC-BY-3.0
```

**Background:** Older people living independently can occasionally have emergency medical issues that require medical support, but they are unable to get to a phone. For example, they fall and are unable to get up. Medical alert systems, such as the example in {numref}`fig:emergency_alarm` can be used to mitigate these issues. A medical alert has two components:

1. a wireless emergency alarm, such as a wrist band (as shown in {numref}`fig:emergency_alarm` ) or a "necklace" worn around the neck that has a button that, when pressed, raises an alarm with a specialised care company, who calls for an ambulance; and 

2. a base station with a *wellness check*. This often contains an red emergency button that connects the person to the care company (same as pressing the emergency alarm), and also a green button that they are asked to press each day before a fixed time. If they fail to press the green button before that time, the care company call them to check that they are OK.

The main aims of this are: (a) keep the person safe; and (b) give peace of mind to their family that if anything happens, they will know quickly.


**Challenge**: The challenge is that *most older people hate these medical alert systems*. They are typically forced upon them by their family, who give them an ultimatum of having an alarm or going into an care home. Their family clearly care about them and want them to be safe, but older people feel that they are under surveillance. They also find that wearing emergency alarms around the wrist or neck is a signal that they are old, frail, and no longer independent. In our study, we found that most people hate the wireless transmitter they wear around their neck, calling it a "cowbell" (allowed people to keep tabs on them), and they often didn't even wear it unless their family were coming to visit (the only time it was not useful). Many older people also disliked the concept of the green button. If they forgot to press it (which must be so easy to forget as it is not meaningful to them),  they would receive a call and feel that they were forgetful and wasting people's time. In short: they felt a lack of control/agency in their lives. The company providing the service didn't view this as a waste of time; and in fact, the people calling them were trained specifically to take the time to talk to them and not rush them off the phone --- quite unusual for most call centres. Some older people didn't mind the system. We saw the the people who *opted in* (that is, they proposed the idea of getting a medical alarm) were much more accepting than those who were given an ultimatum by their family.

**Our thoughts:** When one of our team gained second-hand experience in these systems, having  purchased one for his mother, he discussed his and his mother's experience and noted that there must be an opportunity for better-designed medical alert systems that can achieve the goals of: (a) giving peace of mind to family members who are worried about older relatives living on their own; and (b) giving control/autonomy back to people living independently.

But what would this be?

Without learning about the experience, needs, and desires of older people who live independently and their families, any design we came up with was speculative. We had to **get out of the building and talk to people**.

We spoke with several groups of people:
1. Older people who lived on their own and had an existing medical alert systems.
2. Older people who lived on their own and did not have an existing medical alert system.
3. Families of older people who lived on their own.
4. Two existing medical alert companies, including their executive staff and (quite informally) some call centre staff.

Throughout these notes, we'll use our journey to make the innovation concepts discussed more concrete.

## Takeaways

```{admonition} Takeaways
1. Innovation is about **creating value for someone**. It is not about using the latest technology, wearing turtleneck jumpers at product launches, or just coming up with ideas and implementing them.

2. Most startups, business, and products fail because people **do not understand their market**.

3. Successful innovators **get out of the building** to **understand their customers and their customers' problems**.

4. Successful innovation is about **generating and testing ideas early** so we **fail early** if our ideas are wrong.

5. When our ideas fail, we can **use this as an opportunity to learn**, and then either **refine our product** or  **pivot our strategy**.
```

## References


[^four_steps]: Blank, Steve. *The four steps to the epiphany: successful strategies for products that win*. John Wiley & Sons, 2020.

[^blank_and_dorf]: Blank, Steve, and Bob Dorf. *The startup owner's manual: The step-by-step guide for building a great company*. John Wiley & Sons, 2020.

[^seelig]: Seelig, Tina. *inGenius: A crash course on creativity*. Hay House, Inc, 2012.

[^osterwalder]: Osterwalder, Alexander, and Yves Pigneur. *Business model generation: a handbook for visionaries, game changers, and challengers*. Vol. 1. John Wiley & Sons, 2010. [https://www.strategyzer.com/](https://www.strategyzer.com/)

[^ries]: Ries, Eric. *The lean startup: How today's entrepreneurs use continuous innovation to create radically successful businesses*. Crown Currency, 2011.
