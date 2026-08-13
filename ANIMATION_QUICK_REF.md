# ⚡ Animation Quick Reference Card

## 🎬 Most Common Usage (Copy & Paste)

### Hero Section
```html
<h1 class="animate-fade-in-down">Welcome</h1>
<p class="animate-fade-in-up delay-200">Subtitle</p>
<button class="btn hover-scale delay-400">Click</button>
```

### Fleet Cards
```html
<div class="scroll-animate hover-lift delay-100" data-animation="scale">
  <img class="card-image" src="image.jpg" />
  <h3>Car Name</h3>
  <p>Description</p>
</div>
```

### Stats Section
```html
<div class="stat-item scroll-animate delay-100">
  <div class="stat-number" data-counter="500" data-duration="2000">0</div>
  <p>Happy Customers</p>
</div>
```

### Contact Form
```html
<form>
  <input class="form-control animate-fade-in-up delay-100" />
  <textarea class="form-control animate-fade-in-up delay-200"></textarea>
  <button class="btn hover-scale delay-300">Send</button>
</form>
```

---

## 🎯 Animation Classes (Pick One)

### On Page Load
- `animate-fade-in-up` - Fade + slide up
- `animate-fade-in-down` - Fade + slide down
- `animate-scale-in-up` - Scale + bounce (fancy!)
- `animate-zoom-in` - Zoom effect
- `animate-rotate-in` - Rotation effect

### On Hover
- `hover-scale` - Scale up
- `hover-lift` - Lift with shadow
- `hover-glow` - Glowing effect
- `hover-underline` - Underline animation

### On Scroll
- `scroll-animate` - Automatically triggers on scroll
- Must add `data-animation="fade"` for type

---

## ⏱️ Delay Utilities
```
delay-100, delay-200, delay-300, delay-400, delay-500...delay-1000
```

Use for staggered effects:
```html
<div class="animate-fade-in-up delay-100">First</div>
<div class="animate-fade-in-up delay-200">Second</div>
<div class="animate-fade-in-up delay-300">Third</div>
```

---

## 📊 Data Attributes

| Need | Code |
|------|------|
| Text reveal | `data-text-reveal="word"` |
| Parallax | `data-parallax="0.3"` |
| Counter | `data-counter="500"` |
| Custom duration | `data-duration="2000"` |
| Hover effect | `data-hover-effect="lift"` |
| Scroll animation type | `data-animation="slide-up"` |

---

## 🚀 Copy-Ready Patterns

### Pattern 1: Animated Card List
```html
<div class="stagger-container">
  <div class="stagger-item">Card 1</div>
  <div class="stagger-item">Card 2</div>
  <div class="stagger-item">Card 3</div>
</div>
```

### Pattern 2: Hero with Animations
```html
<section class="hero">
  <h1 class="hero-title animate-fade-in-down">Title</h1>
  <p class="hero-text animate-fade-in-up delay-200">Subtitle</p>
  <div class="btn-group animate-fade-in-up delay-400">
    <button class="btn hover-scale">Button 1</button>
    <button class="btn hover-scale">Button 2</button>
  </div>
</section>
```

### Pattern 3: Features Grid
```html
<div class="features-grid">
  <div class="feature scroll-animate delay-100" data-animation="scale">
    <h3>Feature 1</h3>
  </div>
  <div class="feature scroll-animate delay-200" data-animation="scale">
    <h3>Feature 2</h3>
  </div>
</div>
```

### Pattern 4: About Section with Parallax
```html
<section class="about">
  <img src="bg.jpg" data-parallax="0.3" />
  <div class="content scroll-animate" data-animation="slide-up">
    <h2>About Us</h2>
  </div>
</section>
```

### Pattern 5: Fleet Section
```html
<section class="fleet">
  <h2 class="section-title scroll-animate">Fleet</h2>
  <div class="cars-grid">
    <div class="car-card hover-lift scroll-animate delay-100">
      <image />
    </div>
  </div>
</section>
```

---

## ⚙️ How It Works (No Configuration Needed!)

1. **Scroll Animations** = Automatic! Elements with `scroll-animate` animate when they enter viewport
2. **Page Load Animations** = Automatic! Add `animate-*` class to any element
3. **Hover Effects** = Automatic! Add `hover-*` class to interactive elements
4. **Text Reveals** = Automatic! Add `data-text-reveal="word"` to text elements
5. **Parallax** = Automatic! Add `data-parallax="0.3"` to any element

**No JavaScript coding needed!** It all works with CSS classes + HTML attributes.

---

## 🎨 Customization

Edit animation speeds in `variables.css`:
```css
:root {
  --transition: 0.25s ease-in-out;  /* Lower = faster */
}
```

---

## ✅ Checklist

- [ ] Animations CSS files imported in `style.css`
- [ ] `animations.js` loaded in `index.html`
- [ ] Add `animate-*` classes to page load animations
- [ ] Add `scroll-animate` to sections for scroll effects
- [ ] Add `hover-*` to cards/buttons for interaction
- [ ] Test on mobile (smaller animations work better)
- [ ] Check browser console for errors

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Animation not showing | Add `scroll-animate` class |
| Wrong delay | Use `delay-100`, `delay-200`, etc |
| Parallax not working | Add `data-parallax="0.3"` |
| Text reveal not working | Use `data-text-reveal="word"` |
| Too much animation | Reduce on mobile with `@media` |

---

## 📱 Mobile Tip
Animations are lighter on mobile. All animations work responsively!

## 🎯 Most Effective Animations
1. **Scroll animations** on sections - Very smooth!
2. **Hover lifts on cards** - Professional look
3. **Fade in titles** - Clean entrance
4. **Button hover scale** - Good UX
5. **Parallax on hero** - Impressive effect

---

## 🔗 Full Documentation
See `ANIMATION_GUIDE.md` for complete details and advanced usage!

---

**Ready to use! Copy patterns above and customize as needed. 🚀**
