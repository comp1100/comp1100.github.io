(sec:experimentation)=
# Experimentation: Testing and validation

In this section, we discuss a process for running experiments to test hypotheses on our business model canvas.

 ## Experimentation

 **Why experiment?**  We experiment to **gain insights** about customers, their problems, our solutions, and any other important assumptions we make about our product.

 There are two types of experiment:
 * **Generative/exploratory**: These experiments help us to explore a space.
 * **Evaluative**: These are hypothesis-driven and aim to find data to support or refute a hypothesis.

There are two **reasons** that we experiment:
* To evaluate our understanding of our customers and market fit.
* To evaluate products.

The process of experimentation is summed up with this excellent process model from Steve Blank:

```{figure} ./figs/experimentation_process.png
---
name: fig:experimentation_process
alt: "An overview of the experimentation process. Seven stages: extract hypotheses, prioritise hypotheses, design tests, prioritise tests, run tests, capture learnings, and make progress."
---
The process model for experimentation, according to Steve Blank. Source: https://steveblank.com/2014/10/24/17577/
```

**Step 1**: Extract the hypotheses from your business model canvas (or define them if you haven't yet!)

**Step 2**: Prioritise the hypotheses from what you believe are the most valuable to the least valuable. Based your prioritisation on things like:
  * The risk to your product, where risk is probability times impact. If the impact on your product of the hypothesis being wrong is low and the probability of it being right is high, it is lower priority. If the impact is high and the probability low or unclear, then it is higher priority.
  * How much of a problem the hypothesis is for customers.
  * How much the customers would be willing to pay for the problem to be solved.
  

**Step 3**: Design tests to gather data for your hypotheses and capture these as **test cards**.

**Step 4**: Prioritise your tests. Base your prioritisation on things like:
  * The priority of the hypothesis.
  * How easily you can test the hypothesis.

**Step 5**: Run the tests! 

**Step 6**: Capture the learnings in **learning cards**.

**Step 7**: Decide what to do based on what you have learnt.

Them **repeat!**

## Hypotheses

At this point, our canvases are full of *hypotheses*, not *facts* (yet!).

What but exactly is a hypothesis?

```{admonition} Definition -- Hypothesis
In the context of innovation, a **hypothesis** is a falsifiable statement or prediction about a business idea, product, or customer that can be investigated through empirical observation and experimentation.
```

This is very similar to the definition of "hypothesis" in science.

Note this important property: **falsifiable**. This means that we must write the hypothesis in such a way that we are able to demonstrate it is false using empirical data.

> "In so far as a scientific statement speaks about reality, it must be falsifiable: and in so far as it is not falsifiable, it does not speak about reality." -- Karl Popper, The Logic of Scientific Discovery.


```{admonition} Example -- Non-falsifiable hypothesis
"This solution will help this segment of customers improve their health over the long term."

This is not falsifiable for three (well, two and a half) reasons:

1. The timeframe "over the long term" is not specific enough to measure. If we find it has had no impact within 10 years, anyone could claim "10 years is not long term".
2. The group "this segment" is not specific enough. If it improved 95% of customers health within a year, is this hypothesis supported or refuted? 95% is a lot, but the hypothesis states "this segment", which could be intepreted as "everyone in this segment" or perhaps "a majority of people in this segement".
3. It is not testable *right now* because it talks about the long term. If we mean 10 years, we cannot really test it for 10 years.
```

```{admonition} Example -- Falsifiable hypothesis
"We believe that adding an inventory management function to this product will achieve a customer retention rate of 75% over the first year"

This is falsifiable:

1. It specifies what will happen: 75% retention rate.
2. This is measurable: we can measure retention by seeing which customers at the start of the year are still there at the end of the year.
3. The timeframe is clear: the first year.
```

Framing our assumptions like this treats innovation as a scientific process. Just like designing a scientific experiment, we design an experiment to test our hypotheses; and further, the aim of the experiment should be to try to prove that the hypothesis is wrong!

> "The point is that, whenever we propose a solution to a problem, we ought to try as hard as we can to overthrow our solution, rather than defend it. Few of us, unfortunately, practice this precept; but other people, fortunately, will supply the criticism for us if we fail to supply it ourselves." -- Karl Popper, The Logic of Scientific Discovery.

## Test cards 

**Test cards**, a product of [Strategyzer](https://www.strategyzer.com/), are a good way to provide some structure to the hypotheses and experiments that we run. The format is:

```{figure} ./figs/test_card.png
---
name: fig:test_card
alt: "A test card containing four sections: hypothesis, test, metric, and criteria."
---
The structure of a test card. Source: [https://www.strategyzer.com/](https://www.strategyzer.com/)
```

Each card has four parts:
* **"We believe that ... "** is the hypothesis that we have --- the assumption that we have about a customer segment, their problem, etc. -- anything on the business model canvas!
* **"To verify that, we will ... "** what we will do to test the hypothesis, which almost always involves finding data; e.g. talking to customers, finding existing data, etc.
* **"And measure ... "** specifies exactly what we want to measure; e.g. number of customers who say X, or number of sales of existing product Y.
* **"We are right if ..."** specifies the criteria for either accepting or rejecting the hypothesis. 

### Structuring hypotheses

A good hypothesis statement (the "We believe that ..." statement) should identify a target, a behaviour or observable phenomenon, and a reason for the behaviour/phenomenon:

> We believe that **[target]** are **[showing behaviour / display interest in ]** **[for reason Y]**.


### Structuring verification statements

A good verification statement (the "To verify that ..." statement) should describe a particular behaviour that we will undertake to collect the right data to test the hypothesis:

> To verify that, we will **[undertake behaviour]** to **[identify behaviour]**.



### Structuring measurement statements

A good measurement statement (the "And measure ..." statement) should identify exactly what data will be measured:

> And measure **[particular variable]**.



### Structuring accept/reject statements

A good accept/reject statement (the "We are right if ...") should have a clear and measurable statement that makes it easy to determine whether the hypothesis is accepted or rejected:

> We are right if **[some measurable statement]**.


We can see here that these statements make it clear to determine whether to accept or reject the hypothesis: we count the number of people who said something, and then calculate the percentage. 

Steve Blank states that we should make bets with ourselves (or with each other if in teams) to help make the success/failure definition clear. By framing it as a bet, it helps us to make these concrete.

```{admonition} Example -- Medical alert system test card: users
**We believe that** our end users are people over 65 who live on their own who would use technology to keep in touch with their family more often because they do not see them much.

**To verify that**, we will interview 50 people over 65 who live on their own.

**And measure** how many would like more regular digital interaction with their family.

**We are right if** 70% of older people say that they would like more regular digital interaction with their family.
```


```{admonition} Example -- Medical alert system test card: paying customer
*We believe** that our paying customers are close family members of our end users who would use technology to keep in touch with older family members using a photo-sharing app rather than delegate to a service because they would like assurance that their family members are doing well in a more personal manner.

**To verify that**, we will interview 50 people who have family members over 65 that live on their own and have an existing emergency alarm system.

**And measure** how many would prefer  regular digital interaction with their family member rather than delegating to a service.

**We are right if**  70% of family members say that they would like more regular digital interaction with their family member rather than delegating to a service.
```

We can see above that we don't need to use an actual card: we can just use standard text to record these. The format of the card is what helps us to structure our thinking and to document our findings.

## Learning cards for capture learnings

Similar to test cards, we can structure the outcomes from our experiments in a format called **learning cards**:

```{figure} ./figs/learning_card.png
---
name: fig:learning_card
alt: "A learning card containing four sections: hypothesis, observation, learning & insights,  and decisions & actions."
---
The structure of a learning card. Source: [https://www.strategyzer.com/](https://www.strategyzer.com/)
```

The structure for these is pretty clear: it reflects the language in the test card. 

```{admonition} Example -- Medical alert system learning card: users
**We believed that** our end users are people over 65 who live on their own who would like interact digitally with their family more often because they do not see them much.

**We observed** that 44 out of 50 people we interview confirmed that they would like more regular digital interaction with their family.

**From this we learnt that** our end users would consider using our product.

**Therefore, we will** accept this hypothesis.
```

```{admonition} Example -- Medical alert system learning card: paying customers
"**We believed that** close family members who would like to interact digitally with older family members using a photo-sharing app.

**We observed** that 12 out of 50 people we interview confirmed that they would use such an app.

**From this we learnt that** family members would not use the app. **However**, we learnt that some family members would send photos from their smartphone to such an app.

**Therefore, we will** reject this hypothesis, and test a new hypothesis about how family members would take and send photos for their older family member.
```

Note in the above example that at some point during the interviews, some additional data (about using smartphones) was found. We haven't yet tested this hypothesis formally -- for now, it becomes a new hypothesis (which we eventually did test).

## Types of experiments

Experiments gather evidence for transforming hypotheses into facts -- or into refuted hypotheses.

There are several ways to collect evidence:
* Interviews.
* Observations.
* Immersion.
* Low fidelity solutions such as paper prototypes.
* High fidelity solutions such as implementing new functionality in an existing product.
* Data collected by others.

## Tips for designing and executing experiments

Experiments should:

* Be as small and comprehensible as possible
* Have clear expected outcomes.
* Have a clear definition of success/failure, which everyone agrees to. 
* Be as brief as possible when interviewing to collect data; e.g. preferably less than 30 minutes.

We can test multiple hypotheses at once; e.g. in a single interview or prototype session, but we must do this carefully. We really want to focus on just a few things in each experiment.

We need to prepare for the experiment: research the market and other competitors, research a business (if they are a customer), learn about people in the segment from public data, find out a bit about an interviewee, etc.

Remember that we should:
* **Listen!**
* Observe people's behaviour, tone, and reactions, not just what they say.
* Ask "why" and "why not"
* Ask who else we should talk to.
* Ask if we can follow up with them later.


Remember that we should NOT:
* "Correct" people (except to clarify if they have misunderstood a question).
* Convince people or sell to them.

## Learning from experiments

Once we have executed an experiment, we need to gain insights.

If hypotheses have been supported, then great!

If not, what insights can we gain?
* If people would not pay for this, what would they pay for?
* If these are not our customers, then who is?
* Did we see any outliers that could open up new ideas?
* Pay attention to why our hypotheses are rejected.

What type of insights would we gain? It can be insights about:
* Our target market.
* Our value propositions.
* Our market fit.
* Our product features.


(sec:experimentation:accept_pivot_or_refine)
## Accept, pivot or refine

Once we have gained some insights, recall that there are a few things we can do for each hypothesis that we have:
* accept the hypothesis as a fact;
* refine our hypothesis; or
* pivot our product entirely --- for cases where it appears our value proposition does not have a good market fit.


Recall Eric Ries's model for innovation from {numref}`fig:pivot_vs_refine`, re-produced below:

```{figure} ./figs/pivot_vs_refine.png
---
height: 400px
name: fig:pivot_vs_refine_in_experimentation
alt: "The pivot vs refine pyramid: A pyramid with three layers. The lowest layer is 'Vision', the middle layer is 'Strategy', and the top layer is 'Product'. From Strategy is an arrow to the word 'Pivot'; and from Product is an arrow to the word 'Refine'."
```

In cases where a pivot is required, this typically indicates a setback -- we have rejected some hypotheses and have concluded that we do not have a market fit.

We can react to a setback in three ways:
1. Ignore what our testing showed us and press on with our idea. This is commonly done; but also, note that businesses and product commonly fail, and this is a key reason why. Why do people press on despite the facts telling them they are wrong? Because it is difficult to give up on an idea that we have invested so much time and effort on. 
2. We can **refine** our product ideas. Typically, we can have a good understanding of our customers' problems, but our product idea did not quite solve their problem; or at least, not enough that they would buy it or invest in it. However, we can fine-tune our product ideas, prototype these, and test them again.
3. We can **pivot** our strategy. This happens when we have fundamentally misunderstood what our customers' problems were or what we thought could help solve them. Again, we use what we learnt from our test to improve our understanding and come up with new ideas.

Ries[^ries] notes that it is unusual for organisations to change their **vision** -- this is usually the dream to which they are committed, and often the insights gained from data are sufficient.


## Takeaways



```{admonition} Takeaways
1. **Experiments** help us gain insights about our customers and products by testing our hypotheses.

2. Hypotheses must be **falsifiable** to be of value.

3. **Test cards** are a useful tool to structure our hypotheses.

4. **Learning cards** are a useful tool to structure our learnings from the data.

5. If a hypothesis is refuted, we can still gain insights by asking "why?" and paying attention to the data we gathered.
```    

## References

[^ries]: Ries, Eric. *The lean startup: How today's entrepreneurs use continuous innovation to create radically successful businesses*. Crown Currency, 2011.
