(sec:minimum_viable_product)=
# Minimum viable product 


> "By far the dominant reason for not releasing sooner was a reluctance to trade the dream of success for the reality of feedback." -- Kent Back. Source: Approaching a Minimum Viable Product (August 2009)

```{admonition} Definition -- Minimum viable product (MVP)
A **minimum viable product** (MVP) is a version of a new product that contains the fewest number of features  (or least amount of effort) required to collect feedback about customers.

```




## Purpose of the MVP

```{admonition} Quiz

A quick quiz question for us all: *What is the primary purpose of a minimum viable product (MVP)?* 

1. To test ability of product to meet minimal customer needs.

1. Get as much revenue as we can as early as we can.

1. Identify bugs in product with a fixed feature set that meet a set of requirements.

1. All of the above.
```

Well, what did you answer?

All of these can be useful to us, but item 1 is the **primary** purpose of an MVP. Let's discuss.

The **primary** purpose of an MVP is to test our hypotheses.

If we test a hypothesis about market demand and this test *also results in us gaining revenue*, this is great, as it provides vital funding to continue with our efforts. However, our priority here is for having a valuable product in the long run. Knowing whether we have a product that meets customer needs *in the longer run* is more valuable during customer discovery than building a product that may not be suitable, but gets a few early wins. Of course, early wins are great, but they don't necessarily sustain us.

Identifying bugs in a product is also good, but as above: it is not as valuable at this early stage as testing whether our product meets customer needs.


> "You’re selling the vision and delivering the minimum feature set to visionaries, not everyone." -- Steve Blank


## Principles for an MVP

**Principle 1:** KISS (Keep it simple, stupid!). Do not add "bells and whistles" -- just add enough features to test the hypotheses that you want to test.

**Principle 2:** Fast to build.  We should spend weeks, not months, to build an MVP.

**Principle 3:** Positive user Experience.  Although it is simple, make an MVP a positive experience for the people we test it on. It should be usable, simple, and intuitive -- remember that these people are our future customers!

**Principle 4:** Early adopters. An MVP should appear just to early adopters.

**Principle 5:** Iterate and Refine. Pay attention to user feedback and be prepared to refine this and iterate over it multiple times. It is rare to get everything right in even the first few versions.

**Principle 6:** Set success metrics. An MVP is still used to [test hypotheses](sec:experimentation), so set metrics for those hypotheses. It is not just something for users to play with.

```{figure} ./figs/mvp_donut.png
---
name: fig:mvp_donut
alt: "The use of two donuts to represent a minimum viable product. On the left: a plain cinnamon donut with the label 'Minimum viable product'. On the right, eight fancy donuts with glaze and sprinkles, with the label 'Product vision'."
---
Keep the MDP simple!
```

```{admonition} Example -- Dropbox
[Dropbox](https://dropbox.com/) founder Drew Houston famously used a marketing video to demonstrate what Dropbox *would* do, before it was built, as a way to test whether there was demand for this product. He asked people to sign up and pay, and received 70,000 sign ups on the first day, which game him data to secure funding from investors.
```

Watch [this excellent video](https://www.youtube.com/embed/QRZ_l7cVzzU?si=fR5R5_450jMKb618) from Michael Seibel, partner at [Y Combinator](https://www.ycombinator.com/) and co-founder of [Twitch](https://www.twitch.tv/) discuss how to build an MVP.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QRZ_l7cVzzU?si=fR5R5_450jMKb618" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Seibel lists three important properties of an MVP:

1. They must be fast to build. We should spend weeks, not months, to build an MVP.
1. They should have limited functionality. We should implement just enough functionality to test out our hypotheses.
1. They should appeal just to the early adopters.

```{admonition} Example -- Airbnb
In the [video from Michael Seibel](https://www.youtube.com/watch?v=QRZ_l7cVzzU) that we reference above, he cites the example of Airbib --- a website for finding holiday accommdation rented out by individuals. Seibel notes that the original Airbnb MVP:

* Did not accept payments --- once a match was made, the owner and customer had to sort out payment themselves.
* Did not have a map view --- customers couldn't see a list of available properties on a map view; it was just a list.
* Insisted that owners rented out rooms with an air bed only!
* Was only set up for conferences --- that is, the Airbnb creators would find cities hosting large conference, set up a sit, and remove it again once the conference was over.

However, this Airbnb site was crucial for testing out the founders' initial hypotheses, which were presumable about whether a website that allowed people to list holiday accommodation would attract paying customers. 

I still don't understand the requirement of only giving air beds -- perhaps that was an early marketing trick.
```

```{admonition} Medical alert system -- In Touch
To fulfill the 'keep in touch' idea for our cohort of older people and their families, we implemented a simple photo-sharing app to be run on a tablet. We recruited some customers from our initial interviews.

Family members each had an email address that they could send photos to, allowing them to capture photos of their daily life; e.g. photos of their children (the grandchildren of their older family members). This allowed us to use existing mobile applications on the family side, so came at little cost and was easy to implement.

The older family members received a tablet with a small stand and were asked to place this in a visible place, much like a photo frame. The tablet would show photos that have been sent. Any time new photos were sent, these would be displayed. If no new photos were sent on a day, a previous photo that the older person had liked would be shown. However, to access the photos each day, the older person needed to touch the screen, where their was a notification letting them know a new photo was ready. When this occured, a nominated family member would receive a message, thus letting them know their family member was ok.

This allow us to test the hypotheses that both the older people and their family members would stay in touch using this type of device.

Note that this particular MVP did not allow the older person to send an emergency alert, nor did it enable mobility. 

However, it took just a couple of weeks to implement and ran on stanard tablets and smart phones, enabling us to test the idea. Further, as this was part of a research project, it gave us access to data about frequency and interactions between family members.
```

## Types of MVP

**Pre-Order:** e.g. [Kickstarter](https://www.kickstarter.com/). As in the Dropbox example above, asking customers to pay for a product before it is made is a way to test market demand. Kickstarter campaigns that don't reach a pre-set fundraising target don't go ahead, and customers get a full refund.

**Audience Building:** e.g. Social Networks. By setting up a strong social media presence, we can track whether people will be interested in our product.

**Show and Tell:** Explainer Video. Again, the Dropbox example above is an example MVP -- so simple, yet so effective.

**Partial Product:** Perhaps the best MVP are working products, perhaps with just some (not all) of the features of a product -- the most important ones (minimum viable!) --, such as landing page-single feature websites. In the software world, these can be cheap and easy to build for many MVPs, and we can then release an MVP to early adopters to test the market.

(sec:mvp:mvp-vs-prototyping)=
## MVP vs prototyping

In terms of partial products, a minimum viable product is a **product**, not a prototype. That is, it must be something that we can sell/give to early adopters that they can use to solve their problems. A [prototype](sec:prototyping) designed using wireframes or even paper prototypes are not products.

While [software prototypes are useful](sec:prototyping:types-of-prototype) for gaining feedback about the features, look and feel, etc., of an MVP, ultimately they are not products. For example, we can use tools such as [Figma](https://www.figma.com/) can be used to wireframes, which can be used to gain concrete feedback, they are not products that are customer can use to solve their problem. Consider the emergency alarm system, discussed above and [in the earlier chapter](sec:introduction:medical_alert). A wireframe prototype can be shown to potential customers to gain feedback about the design, features, etc. However, they cannot download this and use it to stay in contact with their families, so it is not a product. Ultimately, using a prototype, we cannot gain feedback about important parts of our value proposition, such as whether it gives older people the independence/autonomy that they crave; or whether their family members get a sense of whether the older person is safe; or whether either will pay for it!

Below, we compare prototypes and partial-product MVPs, across five dimensions:

| Prototype | Product |
|-----------|---------|
| Aims to test and refine test design ideas | Aims to test market fit |
| Visualises core product ideas | Implementants core product features |
| Often not actually functional | Must be functional (even if minimal) |
| Super fast to build and test | Requires working code, deployment, etc. so slower to build |
| Ideas tested in a ‘controlled’ environment | Released to the market    |

The final point is perhaps the one that makes it easy to tell whether something is a partial-product MVP: if we are testing our ideas in a 'controlled' environment; that is, showing a customer features and gaining feedback, then it is a prototype. On the other hand, if a customer is installing an application or accessing a web application and using it to help solve their pains, it is a product.

## Takeaways

```{admonition} Takeaways
1. A **minimal viable product** (MVP) has just the most important features to test our  main hypotheses.

2. We should keep them **simple**, **iterate**, and if possible, **return to customers** to test refinements. 

3. Different MVPs have different purposes, based on the hypotheses we test with them.

4. Prototypes are typically not MVPs.
```         
