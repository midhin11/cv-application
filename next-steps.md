# React CV Application – Implementation Plan

## 1. Component Tree

Start with the simplest possible structure.

```text
App
├── Editor
└── Preview
```

Don't worry about creating smaller components yet. If `Editor` becomes too large, split it later.

---

## 2. App Owns the Resume State

Ask yourself:

> **Who needs the resume?**

Answer:

* Editor (to edit it)
* Preview (to display it)

Therefore, the state belongs in **App**, the closest common parent.

Think of it as:

```text
App
owns
↓
resume
```

---

## 3. One State Object

Don't create separate pieces of state like:

* `name`
* `email`
* `phone`
* `school`
* etc.

Instead, think of the entire resume as one piece of state.

```text
resume
```

which contains all the user's information.

This follows React's principle of **grouping related state**.

---

## 4. Data Flow

Always picture this flow:

```text
User types

↓

Editor

↓

Calls update function

↓

App updates resume state

↓

React re-renders

↓

Preview receives updated resume

↓

Preview automatically updates
```

Nothing manually "pushes" data to the Preview. React simply re-renders with the latest state.

---

## 5. Props

Eventually, App will provide:

### Editor

* The current resume
* A way to update the resume

### Preview

* The current resume

Notice that **Preview never modifies the data**. It only displays it.

---

## 6. Keep Preview Simple

Preview should only answer one question:

> **"Given this resume object, how should I display it?"**

It shouldn't care where the data came from.

---

## 7. Keep Editor Focused

Editor should only answer:

> **"How can the user modify the resume?"**

It shouldn't own the data itself.

---

## 8. Don't Over-Engineer

Don't immediately create:

```text
Editor
├── PersonalInfoForm
├── EducationForm
├── ExperienceForm
└── SkillsForm
```

Start with:

```text
Editor
```

Only split it into smaller components when it starts becoming too large or has multiple responsibilities.

---

## 9. Build Vertically

Instead of building every form first:

1. Create one input.
2. Make it update one field in the Preview.
3. Confirm the data flow works.
4. Repeat for the next field.

A working vertical slice is better than several unfinished features.

---

## 10. Ignore Styling Initially

The Preview can be extremely simple.

```text
John Doe

Email

Phone

Education

Experience

Skills
```

If the data updates correctly, you've already solved the hardest React problem.

Styling comes later.

---

# React Design Checklist

Whenever you're unsure where something belongs, ask yourself:

1. **What is the data?**

   * Example: the resume

2. **Who needs this data?**

   * Editor and Preview

3. **Who is the closest common parent?**

   * App

If you answer these three questions correctly, React's state ownership usually becomes obvious.
