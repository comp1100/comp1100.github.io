# Customer discovery

> "If I had an hour to solve a problem and my life depended on the solution, I would spend the first fifty-five minutes determining the proper question to ask, for once I know the proper question, I could solve the problem in less than five minutes." -- Albert Eistein

Recall the process for [customer development process](sec:intro:customer_development):


```{image} ./figs/customer_development_process.png
```


Innovation takes us from thinking about clients and users to thinking about **customers**.

For this, we need to **discover who are customers are** and **what they need**. This is step 1 in the customer development process.

Customer discovery doesn't mean that we literally need to find the exact people who will buy or use our product. It means something different.

But first, let's define what customer discovery does NOT mean:

* It does not mean that we need to understand the needs and wants of everybody, or even all of our customers.
* It does not mean that we need to find every problem they have.
* It does not mean requirements engineering. 
* It does not mean defining a product on what we think is a good idea and trying to sell it.

```{admonition} Definition --- Customer discovery
**Customer discovery** is the process of turning an initial idea or vision about a market or customers into a set of **facts**.
```

When we think about building a product, we have an initial guess, called a **hypothesis**, about people's problems and how we can solve them. This is best considered a **vision** rather than a specific product. We fail when we assume that our guesses are facts.

The customer discovery process, outlined in {numref}`fig:customer_discovery_process`, consists of four phases:

1. **Define hypotheses:** State our guesses and assumptions as verifiable hypotheses (more on this later), putting together these on a business model canvas (also more on this later).
2. **Test the problem:** get out and speak to our customers to see if we have understood their problem. If not, return to step 1.
3. **Create and test the solution**:  gett out and speak to our customers to see if our solution solves their problem and find out whether they would be willing to use it and pay for it.
4. **Verify, pivot, or refine:** For those hypotheses that hold, turn them into **facts**. For those that don't, [pivot or refine](sec:intro:pivot_vs_refine). 

```{figure} ./figs/customer_discovery_process.png
---
height: 400px
name: fig:customer_discovery_process
---
The customer discovery process
```

Typically though, we want to be able to through this loop as quickly as possible, so that if we get some ideas wrong, we **fail early**.

## Define our hypotheses

To define our hypotheses, we first have to **sketch our vision**. 

This means writing out answers  to the following questions:

1. What are our cusomters top problems?
2. Does our idea help to solve these problems?
3. What would a day in the life of a custom look like befure and after our product?

At this point, the answers to these are **guesses** or **assumptions**. We typically do not know if the answers are true. It may be "obvious" that they are, but many projects fail because team members don't test "obvious" assumptions that turn out to be false.

This version really needs to just be a sketch. At this point, we shouldn't be define detailed solutions to the problem, as we may be wasting valuable time desiging a solution to a problem that doesn't exist. 

````{list-table}

* - Like this....
   - ... not like this
* - ![](./figs/vision_sketch.jpg)
   - ![](./figs/vision_complete.jpg)
````


At this point, we should be able to fill out a [business model canvas](sec:bmc:bmc) with a set of hypotheses:

```{image} ./figs/business_model_canvas_with_hypotheses.png
<!---
%:alt: A business model canvas with a some post-it notes specifying hypotheses in the value propositions, customer relationships, channels, and customer segments.
--
```

Of course, it may be that we already know the answers to some of these questions, either because there are other products that have demonstrated this -- either produts from other organisations or even our own. However, there must be **some** questions we don't have verified answers to. If we did already, it is because someone has already validated these by building the product, and we are therefore not really innovating at all. There is presumably something that we plan to differently to competitors or to improve on earlier versions of our product, and those are based on customer problems that are usually not verified (yet).



## Test the problem

Next, we need to get some data to test whether our customers really do have the problem we think they do.

For this, we will use  hypothesis testing, which we discuss further in  [Experimentation: Testing and validation](sec:experimentation).

Effectively though, we go out and speak to customers about their problems to gather data that can be used to confirm whether our guesses/assumptions are correct or not.

If the data we gather refutes our guesses, we need to redefine our hypotheses.

If the data we gather supports our guess, most to the next step.

## Test the solution

Next, we need to get some data to evaluate whether our solution really does solve the problem.

Again, the test the hypotheses using the same process: going out to speak with customers.

What we take to these meetings depends on how much information we already have, how solid our idea is, and how easy it is to generate some material (e.g. a prototype) to gain feedback. 

## Verify, pivot, or refine

At this point in the process, we should have a set of hypotheses that are either support (they become **facts**) or refuted:

```{figure} ./figs/business_model_canvas_with_facts_and_refuted_hypotheses.png
:alt: A business model canvas with a some post-it notes showing some refuted hypotheses and some facts in the value propositions, customer relationships, channels, and customer segments.
```


Similar to our initial questions, we end the customer discovery process when we have **facts** that answer 'yes' the following questions:

1. What are our customers top problems?
2. Do they recognise that they have this problem?
3. If there was a solution, would they buy it?
4. Can we build a solution at a price that they would pay for it?

If we answer 'no' to answer of these, we need to [pivot or refine](sec:intro:pivot_vs_refine):
* Change our strategy and repeat the cycle of customer discovery again.
* refine our product and repeat the cycle of customer discovery again.

Once we have a set of facts describing our customers and solutions to their problems that are verified, we can move on to the [customer validation step](sec:customer_validation).

**What is a verifiable hypothesis?** We'll discuss more in the chapter on [Experimentation: Testing and validation](sec:experimentation).

## Customer development heuristics

```{admonition} Definition --- Early adopter
**Early adopters** are people typically adopt new solutions because they like being on the cutting edge. They understand that they have a problem, want a solution, usually have an interim solution, and have the funds to purchase a solution.
```

There are a few good heuristics to go by when doing customer development:

1. There are no facts inside your building, so get outside.
2. Develop for the few, not the many.
3. Early adopters make your product.
4. And are smarter than you.
5. Focus Groups are for big companies, not startups.
6. The goal for release 1 is the minimum feature set for early adopters.

## Takeaways

```{admonition} Takeaways
1. Customer discovery is a process for setting out a vision based on some hypotheses, and turning (some of) those **hypotheses into facts.**

2. It requires us to **get out of the building** and work with potential customer segments.

3. It is an **iterative process.** 

4. At the end of each iteration, we decide whether we can continue to customer customer validation, or whether the need to *pivot or refine*.

5. **Early adopters** will be our first customers, so focusing on them can be valuable.
```         