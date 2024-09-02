
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
| `/dashboard         ` |  Page where only admin can see the stadistics about booking by service     |              ✔️          |
| `*`                   |  Not Found                                           |                           |