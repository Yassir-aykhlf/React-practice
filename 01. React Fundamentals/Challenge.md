### **The Scenario**

You've just joined a small but growing SaaS (Software as a Service) startup called "FlexiForms." Our old pricing page is static HTML and a nightmare to update. Your first ticket is to rebuild the pricing section using React to make it dynamic, reusable, and ready for future A/B testing.

### **Your Mission**

Your goal is to build a responsive, component-based pricing tier section. This section will display three different subscription plans. For now, we'll pull the data from a simple hardcoded array, but the component structure should be flexible enough to handle data from an API later.

### **Provided Assets**

Here is the data for the pricing plans. Create a new file, perhaps `src/data.js`, and place this inside.

```javascript
// src/data.js
export const PRICING_DATA = [
  {
    id: 'plan_basic',
    title: 'Basic',
    price: 12,
    features: [
      '10 Form Submissions per Month',
      'Basic Form Fields',
      'Email Notifications',
      'Community Support',
    ],
    isFeatured: false,
  },
  {
    id: 'plan_pro',
    title: 'Pro',
    price: 25,
    features: [
      'Unlimited Form Submissions',
      'All Basic Features',
      'File Uploads & Webhooks',
      'Data Export',
      'Priority Email Support',
    ],
    isFeatured: true,
  },
  {
    id: 'plan_enterprise',
    title: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro Features',
      'Dedicated Account Manager',
      'Custom Integrations',
      '24/7 Phone Support',
      'Guaranteed SLAs',
    ],
    isFeatured: false,
  },
];
```

---

### **The Challenge: Incremental Tasks**

Tackle these in order. Each step builds on the last.

#### **Task 1: The Static Blueprint**

Before you worry about data or reusability, just build *one* static pricing card component.

*   **Goal:** Create a new component called `PricingTier`. For now, hardcode the details for the "Pro" plan directly inside the JSX.
*   **Requirements:**
    *   It should display the plan title (`Pro`).
    *   It should display the price (`$25 / month`).
    *   It should list out the features.
    *   It should have a call-to-action button, like "Sign Up Now".
*   **Focus:** This task is purely about creating a component, writing JSX, and applying some basic CSS to make it look like a card.

#### **Task 2: From Static to Dynamic with Props**

Now, let's make that component reusable.

*   **Goal:** Refactor `PricingTier` so it no longer contains hardcoded data. It should be a dumb, presentational component that receives all its data via `props`.
*   **Requirements:**
    *   In your `App` component, import `PRICING_DATA`.
    *   Use the `.map()` method to render three `PricingTier` components, one for each object in the array.
    *   Pass the `title`, `price`, and `features` for each plan down as props.
    *   Inside `PricingTier`, use these props to display the data. Pay special attention to rendering the list of features.
*   **Focus:** Mastering `props`, rendering lists of components, and using dynamic values (`{}`) in JSX.

#### **Task 3: Composition and Conditional Logic**

This is where we introduce a bit of real-world complexity and test your deeper understanding.

*   **Goal:** The marketing team wants the "Pro" plan to stand out. You also need to make the call-to-action buttons more flexible.
*   **Requirements:**
    *   Modify the `PricingTier` component to visually distinguish the featured plan. Use the `isFeatured` property from the data. This could be a different border color, a background color, or a "Best Value" badge. The implementation is up to you, but it must be driven by the prop.
    *   Refactor the `PricingTier` button. Instead of having a hardcoded button inside, the `App` component should *pass the button into* the `PricingTier` component. For the "Enterprise" plan, the button should say "Contact Us" instead of "Sign Up Now".
*   **Focus:** This task is designed to test two specific concepts:
    1.  **Conditional Rendering/Styling:** How do you change a component's appearance based on a prop? (Hint: Think about the `className` attribute).
    2.  **Component Composition:** How do you pass JSX (like a button) from a parent to a child? (Hint: `children` prop).

#### **Task 4: Professional Organization**

Let's clean up the workspace. A single file gets messy fast.

*   **Goal:** Structure your project files like a professional developer would.
*   **Requirements:**
    *   Create a `components` directory inside `src`.
    *   Move your `PricingTier` component into its own file: `src/components/PricingTier.jsx`.
    *   Create a dedicated CSS file for it: `src/components/PricingTier.css`, and import it into the component file.
    *   Ensure all your `import` and `export` statements are correct and the application still works perfectly.
*   **Focus:** Best practices for project structure and modularity.

---

### **Definition of Done**

You’ll know you're finished when:

1.  Your `App.jsx` is clean and primarily responsible for mapping over data and rendering the `PricingTier` components.
2.  Your `PricingTier.jsx` is a fully reusable component that relies only on `props` for its data and `children` for its call-to-action.
3.  The "Pro" plan is visually highlighted based on the `isFeatured` flag.
4.  The "Enterprise" plan has a "Contact Us" button, while the others have "Sign Up Now" buttons.
5.  Your files are organized neatly into a `components` folder.