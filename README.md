# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#### Client routes

| URL                   | DESCRIPTION                                          | PROTECTED                 |
| --------------------- | -----------------------------------------------------| ------------------------- |
| `/`                   |  Home Page                                           |                           |
| `/services`           |  Services List page                                  |                           |
| `/services/:serviceId`|  Service Details page                                |                           |
| `/stylists`           |  Stylists List page                                  |                           |
| `/stylists/:stylistId`|  Stylist Details page                                |                           |
| `/profile/:userId`    |  Profile Page                                        |              ✔️          |
| `/aboutus`            |  About us page                                       |                           |
| `/users          `    |  Page where only admin can see all users registered  |              ✔️          |
| `*`                   |  Not Found                                           |                           |