# Firebase setup

1. Open https://console.firebase.google.com and create a project.
2. Add a Web app (`</>` icon). Copy the Firebase config values.
3. In this project, copy `.env.example` to `.env`.
4. Fill the `VITE_FIREBASE_*` values from the Firebase Web app config.
5. In Firebase Console → Firestore Database → Create database.
6. Start in production mode.
7. In Authentication → Sign-in method, enable Email/Password if you plan to add the admin dashboard.
8. Add Firestore rules (replace the placeholder admin UID):
```rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /portfolio_visits/{docId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null
        && request.auth.uid == 'YOUR_ADMIN_UID';
    }
    match /visitor_contacts/{docId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null
        && request.auth.uid == 'YOUR_ADMIN_UID';
    }
  }
}
```
9. Deploy with `npm install && npm run build`.
10. Never commit `.env`; add it to `.gitignore`.

## Admin dashboard
1. Enable **Authentication → Sign-in method → Email/Password**.
2. Create one admin user in Firebase Authentication.
3. Deploy the included `firestore.rules` in Firestore Rules.
4. Open `https://sagarpatole113.github.io/portfolio/#/admin` and sign in.
5. Never publish the admin password in the repository.

The dashboard displays tracked visits, unique visitor IDs, and contact submissions. Firestore reads require authentication; public users can only create visit/contact documents.


## IP whitelist and browser details

The site calls `https://ipapi.co/json/` to obtain approximate IP-based location and network details. From the private dashboard, click **DETECT MY IP**, then **ADD TO WHITELIST**. This excludes that public IP from future visit entries for all devices using that network. Public IPs can change, so update the whitelist when needed. Do not treat IP geolocation as exact GPS location.
