# Outfit Now

## Description

Outfit Now is a web platform that connects clients with professional stylists, offering personalized style packs for all types of events. The app allows users to explore styling services, book appointments, and manage their reservations easily and efficiently. We developed both the backend and frontend, along with a custom API to ensure the smooth functionality of the platform.

This repository includes the code for the frontend, and you can find the backend code [here](https://github.com/martamerchan16/server-outfitnow).

<img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1725466026/home_uyquyh.png" alt="Details Page Screenshot" width="70%"/>

## Main Features:

1. **User Authentication:** 
   - Secure registration and login with email and password.
   - Role differentiation for Clients, Stylists, and Admins, each with unique access and functionalities.

2. **Booking System:** 
   - Clients can book, edit, or cancel stylist reservations.
   - Stylists have access to a dashboard to manage their bookings.

3. **Service Search:** 
   - Users can filter stylists by event type and view detailed profiles, including past work and style specialties.

<img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1725466026/servicesPage_esbonh.png" alt="Details Page Screenshot" width="70%"/>

## Demo

Try [Outfit Now](https://bounce-pundits.netlify.app/) yourself!

## Client routes

| URL                   | DESCRIPTION                                          | PROTECTED                 |
| --------------------- | -----------------------------------------------------| ------------------------- |
| `/`                   |  Home Page                                           |                           |
| `/services`           |  Services List page                                  |                           |
| `/services/:serviceId`|  Service Details page                                |                           |
| `/stylists`           |  Stylists List page                                  |                           |
| `/stylists/:stylistId`|  Stylist Details page                                |                           |
| `/profile/:userId`    |  Profile Page                                        |              ✔️          |
| `/aboutus`            |  About us page                                       |                           |
| `/dashboard         ` |  Page where only admin can see the stadistics about booking by service     |              ✔️          |
| `*`                   |  Not Found                                           |                           |