Project name: QR-based menu web automation

## Project Definition

_A patisserie menu project aims at creating design and developing the interface of the products by listing and categorizing them throughout the scope of the MVP. For further implementation, the current product will be served within the larger boundaries of the MVP by expanding it with a CRM admin dashboard and dynamic product listing._

> _Permission obtained from the client to share the project open sourced._

### Some shots from production ready version of the project

App screenshot:
![app screenshot](/public/assets/app_screenshot.png)

---

UI mockup screenshot:
![UI mockup](/public/assets/beyaz-kose-patiserrie-ui.png)

### Tech stack (MVP – production ready)

- Front-end

  - Next.js 15.3 – page router
  - React.js 19
  - TailwindCSS v4
  - Typescript
  - Motion

- Hosting
  - Netlify

### To-do

- ~~Finding the accurate color palette that matches with the client's designing.~~
- ~~Finding the actual font \*\*.~~
- ~~Initializing a github repo called `beyaz-kose-patisserie-restaurant-system`.~~
- ~~\*\* project called also `beyaz-kose-patisserie-restaurant-system`.~~
- Implementing UI
  - ~~Designing the visual represntation of UI components as well as finding necessary/optional resources.~~
  - ~~Adding `globals.css` styles and fonts configs.~~
  - ~~Developing the UI elements that will be used.~~
  - ~~Creating product listing prototypes for categories.~~
  - ~~Creating mock-up and testing.~~
  - ~~Adding element animations that triggers on scroll when in view.~~
  - Creating `send your location to your friend` button. (Check **API AVAILABILITY** from whatsapp).**Feature moved to future to-do**
  - ~~Adding footer for copyright.~~
  - ~~Adding transition API that will be used as intro.~~
  - ~~Adding fundamental SEO checklist.~~
- ~~Adding last touches (assets, extras, dividers...).~~
- ~~Testing the app.~~
- ~~Building/Launching to production.~~
- ~~Deploying to netlify with (beyazkosepatisserie.netlify.app).~~
- ~~Extracting the QR code asking the table count of the store.~~

### Assets

**Selected color variable table:**

| Role              | Tailwind Class (≈) | Hex       | RGB               | Usage Examples                                  |
| ----------------- | ------------------ | --------- | ----------------- | ----------------------------------------------- |
| **Primary**       | `cyan-400`         | `#22D3EE` | `(34, 211, 238)`  | Major buttons, links, active states, headers    |
| **Secondary**     | —                  | `#94AAAA` | `(148, 170, 170)` | Sub‐headers, borders, icons—ties back to logo   |
| **Accent**        | —                  | `#CAD5D5` | `(202, 213, 213)` | Background cards, highlights, “disabled” fields |
| **Neutral Dark**  | —                  | `#2E2E2E` | `(46, 46, 46)`    | Body text, icons, dark‐mode contrasts           |
| **Neutral Light** | —                  | `#F9F9F9` | `(249, 249, 249)` | Page backgrounds, input/card backgrounds        |

**Logo:**
![App logo](/public/logo.png)

**Designed QR for restaurant tables:**
![QR](/public/logo.png)

---

### Notes to the client after releasing the prod. ready version

**QR automation superficial project report**

_Project Definition_
It includes a mobile web application where customers can access the menu and more by scanning QR codes on the tables inside the shop.

_Projenin Amacı_
To minimize the maximum workforce by increasing the service speed of employees with customers during working hours.

_Desired specifications:_

1. The products and pricing offered in the specified menu to be used in the user interface.
2. A simple interface, the name of the product and its price were considered sufficient.
3. QR code support that allows customers to be directed to the web application, i.e. the menu, by scanning it from the cameras of mobile devices.

_Extra processes developed:_

In addition to the items mentioned above,

- Integrated discount mechanism for products.
- Added a button that gives directions to the location of the shop when pressed.
- Google Maps integration has been improved, showing the location of the shop interactively.
- Scrolling animations have been added to make the products stand out more and be taken into consideration by customers.
- Due to the constant changes in pricing, the infrastructure work of the product management panel, which has a high potential to be developed into software in the future, was carried out within the project and the entire architecture was prepared.
- An animated opening screen was developed to make the brand name more evocative in the eyes of customers.
- The project was implemented in the most efficient way by using the latest technology hosting and internet services.

_Performance_

After the completion of the project, various essential tests were carried out. The purpose of these tests was to measure the support of the interface by browsers and devices.

As a result, loading issues were fixed for some older devices, and our website/application ran smoothly on almost all mobile devices with a 92% success rate.

_Important information_

Next steps,

I believe that the development of a “product dashboard” instead of constantly changing the pricing each time with manual programming will play an important role in the long run in terms of sustainability as well as speed.
