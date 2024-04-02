**Architecute**
Here's the best solution for a software engineering internship at Utibu health, combining the strengths of various approaches and addressing potential challenges:

**Overall Architecture:**

1. **Mobile App (Frontend):** Built using a modern framework like React Native or Flutter for a cross-platform experience (iOS and Android). 
2. **API Server (Backend):** Developed using a server-side technology like Node.js or Python with a framework like Express.js or Django for robust API development.
3. **Legacy Database (Existing System):** Utibu health's existing Microsoft SQL Server database remains the central data storage.

**Mobile App Features:**

* **User Login/Registration:** Allows existing Utibu health patients to register or log in securely.
* **Medication Catalog:** Displays a list of medications available for ordering, potentially with details and instructions.
* **Order Management:** Users can search for medications, add them to a cart, and place orders.
* **Order Status Tracking:** Users can view the status of their orders (e.g., "Pending," "Confirmed," "Ready for Pickup").
* **Payment Gateway Integration:** Optional integration with a secure payment gateway (e.g., Stripe, PayPal) for immediate online payments.
* **Offline Functionality (Optional):** Allows users to browse medication details and partially build carts even without an internet connection. Submitted orders would be queued and sent when a connection becomes available.
* **Statement View:** Displays a record of past medication orders and associated costs.

**API Server Functionality:**

* **User Authentication:** Validates user credentials against the legacy database.
* **Medication Data Retrieval:** Fetches medication information from the legacy database.
* **Order Management:** Receives medication orders from the mobile app, validates stock levels against the legacy database.
    * If stock is sufficient:
        * Updates the legacy database with the new order.
        * Sends a confirmation message to the user through the mobile app.
    * If stock is insufficient:
        * Informs the user about the unavailability and suggests contacting the pharmacy.
* **Payment Processing (Optional):** Handles payments received through the mobile app using the integrated payment gateway.
* **Order Status Updates:** Notifies the mobile app about order status changes (e.g., confirmation, ready for pickup).
* **Offline Order Queuing (Optional):** Stores incomplete orders locally on the user's device and transmits them to the server upon reconnection.

**Legacy Database Integration:**

* **API Server Connection:** Establishes a secure connection to the legacy Microsoft SQL Server database using appropriate drivers or libraries.
* **Data Synchronization:** The API server retrieves medication data and updates order information in the database.
* **No Direct Mobile App Access:** Mobile app interacts only with the API server, not directly with the legacy database, ensuring data integrity.

**Addressing Challenges:**

* **No Public IP:** Utilize a cloud-based solution like AWS or Azure to host the API server. This provides scalability, security, and allows the mobile app to connect to the server via the internet without a public IP at the health facility.
* **Data Security:** Implement robust authentication, authorization, and encryption mechanisms to protect user data and medication information.
* **Offline Functionality:** Develop offline capabilities in the mobile app for a seamless user experience even with intermittent internet connectivity.

**Additional Considerations:**

* **User Interface (UI) and User Experience (UX):** Design the mobile app with a user-friendly interface and clear navigation, considering the needs of patients with chronic conditions.
* **Push Notifications (Optional):** Implement push notifications to inform users about order confirmations, status updates, and medication reminders.
* **Scalability:** Design the system with scalability in mind to accommodate future growth in the number of users and medication orders.

**Benefits:**

* **Improved Patient Convenience:** Patients can conveniently order medications remotely and avoid unnecessary visits to the pharmacy.
* **Reduced Pharmacy Workload:** Automation of order processing can free up pharmacists' time for patient consultations.
* **Improved Inventory Management:** Real-time information on online orders can help manage stock levels effectively.
* **Data Integration and Centralization:** Orders placed online seamlessly integrate with the existing database, providing a complete view of all medication transactions.

This solution effectively addresses Utibu health's requirements while considering the existing infrastructure and technical limitations. It offers a modern, secure, and scalable platform for medication ordering, improving patient experience and pharmacy efficiency.


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
