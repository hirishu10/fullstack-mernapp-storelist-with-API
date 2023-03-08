# Full Stack MERN App (Store-List)

**Update:** Added Login/Register UI with the help of JWT Token (Json Web Token)

**Version:** 1.2.0

**Website:** https://mernstorelist.netlify.app/

> Some credentials for testing our app

- **Email:** mernstorelist.com

- **Password:** password

Creating full stack store list MERN App with the help of MongoDB, Express, React, Node.js, Redux, JWT (JSON web token), API(Application Programming Interface), etc.

- [Store List](#store-list)
- [Add Item](#add-item)
- [Refresh Item](#refresh-item)
- [Remove Item](#remove-item)
- [API (Store-List)](#api-store-list)
- [Author](#author)

# Store List

> Home screen of Store List MERN App ↓
> <img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/mernapps/storelist/no-data.png" width="100%" height="100%" />

# Add Item

> Adding item and updating in the database ↓
> <img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/mernapps/storelist/add-img.png" width="100%" height="100%" />

> See this for refrence ↓
> <img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/mernapps/storelist/add.gif" width="100%" height="100%" />

# Refresh Item

> Refresh item ↓
> <img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/mernapps/storelist/data-added.png" width="100%" height="100%" />

> See this for refrence ↓
> <img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/mernapps/storelist/refresh.gif" width="100%" height="100%" />

# Remove Item

> Remove item from the store and also from the database ↓
> <img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/mernapps/storelist/remove.gif" width="100%" height="100%" />

# API (Store-List)

> With the help of API we can push the data from server to the database collection ↓

> => API (Application Programming Interface):

- /api/items => Get All the Items inside the database collection

- /api/items/add => Add new item inside the database collection (provide the **name** parameter in the body and add the same)

- /api/items/remove => Delete item from the database collection (/delete/**id:** provide the id and delete the same)

- /api/items/length => Get the length of total items from the database collection

> For user Register/Login

- /api/users/register => Create account with this API for free to use the mern store list app
- /api/auth => Login in the account with credentials and receive the Token

> Note: Above APIs are from private API provider however some are publically available for users Please check out the app [https://rishuapi.vercel.app/api](https://rishuapi.vercel.app/api)

<!-- author  -->

# Author

#### Thank You All 🙏🏻

Made with 🖤 by

**Author** : [Rishu Chowdhary](https://github.com/hirishu10)

**Email** : hi.10rishu@gmail.com

<!-- author  -->
