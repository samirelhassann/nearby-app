
<p align="center"><h1 align="center">NEARBY-APP</h1></p>

<p align="center">
	<img src="https://img.shields.io/github/license/samirelhassann/nearby-app?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/samirelhassann/nearby-app?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/samirelhassann/nearby-app?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/samirelhassann/nearby-app?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
---

##  Overview

Nearby-App is a cutting-edge solution that simplifies discovering local businesses and their exclusive offers. With features like interactive maps, dynamic market pages, and seamless coupon access, it enhances user experience. Ideal for shoppers seeking nearby deals, the app streamlines navigation and showcases businesses effectively.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Based on React Native and Expo</li><li>Follows a modular component-based architecture</li><li>Utilizes React Navigation for routing</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Linting with ESLint and Prettier</li><li>Uses TypeScript for type safety</li><li>Follows Airbnb code style guidelines</li></ul> |
| 📄 | **Documentation** | <ul><li>Primary language is TypeScript</li><li>Includes a mix of JSON, TypeScript, and JSX files</li><li>Comprehensive documentation with usage and installation commands</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with various Expo modules like Camera, Location, and Fonts</li><li>Uses Axios for API integration</li><li>Includes Jest for testing</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Components are modular and reusable</li><li>Follows a component-driven development approach</li><li>Utilizes React hooks for state management</li></ul> |
| 🧪 | **Testing**       | <ul><li>Includes Jest for unit and integration testing</li><li>Test commands available for running tests</li><li>Ensures code reliability through testing</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized performance with React Native Reanimated</li><li>Utilizes native modules for enhanced performance</li><li>Efficient rendering with React Native Maps</li></ul> |
| 🛡️ | **Security**      | <ul><li>Follows security best practices for handling user data</li><li>Uses secure communication with APIs</li><li>Ensures data privacy and integrity</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Includes a wide range of dependencies for various functionalities</li><li>Manages dependencies using Yarn and npm</li><li>Ensures dependency versions are specified for stability</li></ul> |

---

##  Project Structure

```sh
└── nearby-app/
    ├── app.json
    ├── assets
    │   └── images
    ├── babel.config.js
    ├── eas.json
    ├── metro.config.js
    ├── nativewind-env.d.ts
    ├── package.json
    ├── src
    │   ├── @types
    │   ├── app
    │   ├── assets
    │   ├── domains
    │   ├── providers
    │   ├── services
    │   ├── styles
    │   └── useCases
    ├── tailwind.config.js
    ├── tsconfig.json
    └── yarn.lock
```


###  Project Index
<details open>
	<summary><b><code>NEARBY-APP/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/metro.config.js'>metro.config.js</a></b></td>
				<td>Enhances Metro configuration by integrating NativeWind for styling, optimizing the project's build process.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/babel.config.js'>babel.config.js</a></b></td>
				<td>- Configures Babel presets and plugins for the project, enabling JSX transformation and module resolution<br>- Sets up aliases for easier import paths and includes necessary extensions<br>- Caches configuration for performance optimization.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/app.json'>app.json</a></b></td>
				<td>- Defines the configuration settings for the 'nearby-app' project, specifying details such as app name, icons, orientation, and platform-specific settings for iOS, Android, and web<br>- Additionally, includes plugins, experiments, and extra configurations like router settings and EAS project ID<br>- This file centralizes key project parameters for seamless app development and deployment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Configures TypeScript compiler options for strict type checking and module resolution within the project's source code directory<br>- Sets up base URL and path mappings for easier import statements<br>- Includes and excludes specific file patterns for compilation.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/package.json'>package.json</a></b></td>
				<td>Define the project's main functionality and purpose within the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/eas.json'>eas.json</a></b></td>
				<td>Defines configuration settings for CLI version, build environments, and production submission in the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>- Configures Tailwind CSS to extend the project's theme with custom colors and fonts<br>- Defines content paths and presets for the project's TypeScript and React files.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/nativewind-env.d.ts'>nativewind-env.d.ts</a></b></td>
				<td>- Defines type references for NativeWind in the project, ensuring correct typings are used<br>- This file should remain unaltered and included in the source code as it's generated by NativeWind.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<details>
				<summary><b>domains</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/domains/place.ts'>place.ts</a></b></td>
						<td>- Define the structure for representing places and rules within the project's domain<br>- The code file in src/domains/place.ts outlines interfaces for defining place attributes like name, location, and contact details, along with associated rules<br>- This facilitates consistent data modeling and management across the codebase.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/domains/category.ts'>category.ts</a></b></td>
						<td>Defines the Category interface, specifying the structure for category objects within the project architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>styles</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/styles/global.css'>global.css</a></b></td>
						<td>Define global styles using Tailwind CSS for consistent styling across the project.</td>
					</tr>
					</table>
					<details>
						<summary><b>theme</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/styles/theme/index.ts'>index.ts</a></b></td>
								<td>- Exports color and font family styles for the project's theming system, centralizing style-related configurations<br>- This file plays a crucial role in maintaining consistency and coherence across the codebase by providing a unified source for defining colors and font families used throughout the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/styles/theme/font-family.ts'>font-family.ts</a></b></td>
								<td>Define font families for consistent typography across the project.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/styles/theme/colors.ts'>colors.ts</a></b></td>
								<td>- Define color palettes for the project's UI components to ensure consistent and visually appealing design<br>- The 'colors.ts' file centralizes color definitions, making it easy to maintain and update the color scheme across the codebase.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/index.tsx'>index.tsx</a></b></td>
						<td>- Defines the main entry point for the React Native app, rendering the WelcomePage component within a View component<br>- This file sets up the initial structure and layout of the application, providing a starting point for user interaction.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/_layout.tsx'>_layout.tsx</a></b></td>
						<td>- Defines the app's main layout structure, ensuring fonts are loaded before rendering<br>- Integrates custom query client provider and sets up gesture handling<br>- Maintains consistent styling and navigation options throughout the application.</td>
					</tr>
					</table>
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<details>
								<summary><b>market</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/market/[id].tsx'>[id].tsx</a></b></td>
										<td>- Displays a market page with dynamic content fetched using a custom hook<br>- Renders market details like name, description, coupons, address, and phone<br>- Includes components for header, action buttons, rules, and information display<br>- Handles loading state elegantly.</td>
									</tr>
									</table>
									<details>
										<summary><b>hooks</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/market/hooks/use-market.ts'>use-market.ts</a></b></td>
												<td>Enables fetching place data and loading state for the market page using local search parameters and React Query.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>components</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/market/components/header.tsx'>header.tsx</a></b></td>
												<td>- Define a reusable Header component for market pages, displaying a cover image with a back button<br>- The component structure is based on React Native, enhancing user experience by providing a visually appealing header section.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/market/components/informations.tsx'>informations.tsx</a></b></td>
												<td>- Displays contact information with address and phone number in a visually appealing format using icons and text<br>- This component enhances the user experience by presenting essential details in a clear and structured manner within the market page of the application.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/market/components/action-buttons.tsx'>action-buttons.tsx</a></b></td>
												<td>- Implements ActionButtons component for handling camera interactions, including opening the camera to scan QR codes and displaying camera view<br>- Utilizes Expo Camera and lucide-react-native icons<br>- Integrates with coupon service for fetching data<br>- Supports user permissions and error handling.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/market/components/used-coupons.tsx'>used-coupons.tsx</a></b></td>
												<td>- Generates a component displaying used coupons with lucide-react-native icons and styled text<br>- The component iterates over a fixed number of coupon entries, showing the icon and timestamp for each<br>- This file contributes to the market page's UI by rendering a list of used coupons in a visually appealing manner.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/market/components/rules.tsx'>rules.tsx</a></b></td>
												<td>- Render a React component displaying rules for a market page based on provided PlaceRule data<br>- The component iterates through rules, presenting each with a bullet point.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/market/components/back-button.tsx'>back-button.tsx</a></b></td>
												<td>- Enables navigation back functionality in the market page using a back button component<br>- Integrates with the router to handle navigation actions and provides a customizable action prop for additional functionality.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>home</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/index.tsx'>index.tsx</a></b></td>
										<td>- Render the homepage layout by integrating category selection, a map view, and a list of places<br>- The code orchestrates the display of these components within a flexible container, enhancing user interaction and navigation.</td>
									</tr>
									</table>
									<details>
										<summary><b>hooks</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/hooks/use-places.ts'>use-places.ts</a></b></td>
												<td>- Enables fetching and displaying places based on selected category<br>- Utilizes React Query for data fetching and manages loading and error states<br>- Integrates with the category context to dynamically update the displayed places.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>providers</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/providers/category-provider.tsx'>category-provider.tsx</a></b></td>
												<td>Enables management of selected category state and provides context for category-related data throughout the application.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>components</b></summary>
										<blockquote>
											<details>
												<summary><b>map</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/map/index.tsx'>index.tsx</a></b></td>
														<td>- Render a dynamic map displaying user location and nearby places with interactive markers<br>- Allows users to navigate to their location and view details of nearby places<br>- Integrates with the app's routing system for seamless navigation<br>- Enhances user experience by providing visual context and easy access to location information.</td>
													</tr>
													</table>
													<details>
														<summary><b>hooks</b></summary>
														<blockquote>
															<table>
															<tr>
																<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/map/hooks/use-map.ts'>use-map.ts</a></b></td>
																<td>- Enables map functionality for displaying current location and places<br>- Integrates with location services and manages map interactions<br>- Supports user navigation to their current location on the map<br>- Enhances user experience by providing a visual representation of nearby places.</td>
															</tr>
															</table>
														</blockquote>
													</details>
												</blockquote>
											</details>
											<details>
												<summary><b>places-list</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/places-list/place.tsx'>place.tsx</a></b></td>
														<td>- Define a reusable component for displaying place details with an option for a loading state<br>- The component includes name, image, description, and coupon information<br>- It handles formatting the coupon text based on the number available<br>- The loading state mimics the structure of the main component with skeleton placeholders for content.</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/places-list/index.tsx'>index.tsx</a></b></td>
														<td>- Implements a dynamic list of places with a search feature using a BottomSheet component<br>- Displays loading skeletons while fetching data and renders the list of places with their details<br>- Enhances user experience by allowing interaction with each place item.</td>
													</tr>
													</table>
													<details>
														<summary><b>hooks</b></summary>
														<blockquote>
															<table>
															<tr>
																<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/places-list/hooks/use-place-list.ts'>use-place-list.ts</a></b></td>
																<td>- The code file in use provides a hook for managing a list of places in the home component<br>- It fetches places, handles loading states, and defines behavior for interacting with individual places<br>- The hook also sets up a bottom sheet for displaying place details and navigation functionality.</td>
															</tr>
															</table>
														</blockquote>
													</details>
												</blockquote>
											</details>
											<details>
												<summary><b>categories</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/categories/index.tsx'>index.tsx</a></b></td>
														<td>- The code in src/app/pages/home/components/categories/index.tsx orchestrates the display of formatted categories using React Native components<br>- It leverages Suspense for loading states and renders a list of CategoryButtons based on user interactions<br>- This file plays a crucial role in managing the presentation of categories within the overall application architecture.</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/categories/category-button.tsx'>category-button.tsx</a></b></td>
														<td>- The CategoryButton component renders a pressable button with dynamic styling based on the selected state<br>- It also includes a loading state with a skeleton placeholder<br>- This component enhances the user experience by providing interactive category buttons with visual feedback.</td>
													</tr>
													</table>
													<details>
														<summary><b>hooks</b></summary>
														<blockquote>
															<table>
															<tr>
																<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/categories/hooks/use-categories.ts'>use-categories.ts</a></b></td>
																<td>- Enables the creation of formatted categories for display and interaction within the application<br>- Retrieves categories data, formats it, and handles category selection based on user interaction<br>- Facilitates seamless integration with the category provider and ensures the initial selection of a category when none is chosen.</td>
															</tr>
															</table>
														</blockquote>
													</details>
													<details>
														<summary><b>types</b></summary>
														<blockquote>
															<table>
															<tr>
																<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/home/components/categories/types/formatted-category.ts'>formatted-category.ts</a></b></td>
																<td>- Enhances Category objects by adding a 'selected' flag, crucial for managing user interactions within the home page's category selection feature<br>- This extension ensures seamless integration of user selections with the existing Category model, optimizing the user experience.</td>
															</tr>
															</table>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>welcome</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/welcome/index.tsx'>index.tsx</a></b></td>
										<td>- Defines the WelcomePage component responsible for rendering the initial screen of the application<br>- It integrates header information, a step indicator, and a 'Start' button for navigation<br>- This component plays a crucial role in providing users with a welcoming and intuitive onboarding experience.</td>
									</tr>
									</table>
									<details>
										<summary><b>components</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/welcome/components/header-info.tsx'>header-info.tsx</a></b></td>
												<td>- Defines a React component for displaying header information in the welcome page of the Nearby app<br>- It includes the Nearby logo, a welcoming message, and information about advantage coupons<br>- The component is structured using React Native elements for a visually appealing user interface.</td>
											</tr>
											</table>
											<details>
												<summary><b>steps</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/welcome/components/steps/steps.tsx'>steps.tsx</a></b></td>
														<td>- Displays a visual guide of how the app works by showcasing step information with corresponding icons and titles<br>- The component leverages custom hooks to fetch step details and renders them in a structured layout, enhancing user understanding of the app's functionality.</td>
													</tr>
													</table>
													<details>
														<summary><b>hooks</b></summary>
														<blockquote>
															<table>
															<tr>
																<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/welcome/components/steps/hooks/use-steps.ts'>use-steps.ts</a></b></td>
																<td>- Generates step information for the welcome page, including titles, descriptions, and icons for each step<br>- The information helps users navigate the app and understand the process of finding and using benefits at nearby establishments.</td>
															</tr>
															</table>
														</blockquote>
													</details>
													<details>
														<summary><b>types</b></summary>
														<blockquote>
															<table>
															<tr>
																<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/pages/welcome/components/steps/types/bullet-info.ts'>bullet-info.ts</a></b></td>
																<td>- Define a reusable data structure for displaying bullet information in the welcome page component<br>- This structure includes a title, description, and an icon component to enhance visual representation.</td>
															</tr>
															</table>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/components/query-error-boundary.tsx'>query-error-boundary.tsx</a></b></td>
								<td>- Enables error handling and reset functionality for queries in React components using an error boundary and reset boundary<br>- The code ensures a seamless user experience by displaying a custom error component when errors occur and allowing users to reset the query state.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/components/skeleton.tsx'>skeleton.tsx</a></b></td>
								<td>- Defines a reusable Skeleton component for displaying loading placeholders in the React Native app<br>- The component accepts custom styles and properties, enhancing the user experience by providing visual feedback during data loading.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/components/loading.tsx'>loading.tsx</a></b></td>
								<td>Implements a loading component using React Native's ActivityIndicator to display a loading animation.</td>
							</tr>
							</table>
							<details>
								<summary><b>button</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/app/components/button/index.tsx'>index.tsx</a></b></td>
										<td>- The code in the provided file defines a customizable button component for a React Native application<br>- It includes features such as different button variants, loading state handling, and the ability to include icons<br>- This component encapsulates the visual and interactive behavior of buttons, enhancing the user interface of the application.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/endpoints.ts'>endpoints.ts</a></b></td>
						<td>- Defines API endpoints for categories, markets, and coupons using constructEndpoint utility<br>- Enum PATHS stores endpoint paths<br>- ENDPOINTS object maps endpoint functions to construct URLs with optional path parameters<br>- This file centralizes endpoint construction logic for the project's service layer, promoting code reusability and maintainability.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/api.ts'>api.ts</a></b></td>
						<td>- Implements API request delay functionality for the project, adding a random delay before each request is sent<br>- This delay helps simulate real-world network conditions and improve the overall robustness and reliability of the application's communication with external services.</td>
					</tr>
					</table>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/utils/construct-endpoint.ts'>construct-endpoint.ts</a></b></td>
								<td>- Generates fully constructed API endpoints by replacing path parameters and appending query parameters<br>- This function enhances the project's service layer by simplifying endpoint construction, ensuring accurate and formatted URLs for API requests.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>coupon</b></summary>
						<blockquote>
							<details>
								<summary><b>get-coupon</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/coupon/get-coupon/get-coupon-service.ts'>get-coupon-service.ts</a></b></td>
										<td>- The `get-coupon-service.ts` file in the `src/services/coupon/get-coupon` directory fetches coupon data from an API endpoint<br>- It utilizes the `api` service and endpoint definitions to retrieve coupon information based on the provided request model<br>- This service function plays a crucial role in handling coupon-related operations within the project architecture.</td>
									</tr>
									</table>
									<details>
										<summary><b>types</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/coupon/get-coupon/types/get-coupon-service-response.ts'>get-coupon-service-response.ts</a></b></td>
												<td>- Defines the structure for the response of the Get Coupon service, specifying the format for the coupon data that will be returned<br>- This interface plays a crucial role in ensuring consistency and clarity in the communication between the service and other components within the codebase architecture.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/coupon/get-coupon/types/get-coupon-service-request.ts'>get-coupon-service-request.ts</a></b></td>
												<td>Define the request structure for fetching coupon details, ensuring consistency across service interactions in the codebase.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>types</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/types/request-model.ts'>request-model.ts</a></b></td>
								<td>- Defines a RequestModel type with required path and optional query parameters, headers, and payload properties<br>- The type enforces specified options as mandatory for path and optional for the other fields, enhancing flexibility and clarity in defining request structures within the codebase architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>categories</b></summary>
						<blockquote>
							<details>
								<summary><b>get-categories</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/categories/get-categories/get-categories-service.ts'>get-categories-service.ts</a></b></td>
										<td>Retrieve categories data from the API using predefined endpoints, facilitating seamless integration with the project's service layer.</td>
									</tr>
									</table>
									<details>
										<summary><b>types</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/categories/get-categories/types/get-categories-service-response.ts'>get-categories-service-response.ts</a></b></td>
												<td>Defines the structure for the response data returned by the service responsible for fetching categories.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>places</b></summary>
						<blockquote>
							<details>
								<summary><b>get-place</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/places/get-place/get-place-service.ts'>get-place-service.ts</a></b></td>
										<td>- Retrieve place data from the API using the specified place ID path<br>- The service communicates with the API endpoint to fetch place details based on the provided request model<br>- This functionality is crucial for obtaining specific place information within the project's service architecture.</td>
									</tr>
									</table>
									<details>
										<summary><b>types</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/places/get-place/types/get-place-service-response.ts'>get-place-service-response.ts</a></b></td>
												<td>- Defines the structure for the response returned by the 'get-place' service, including details like place ID, name, description, location coordinates, address, phone number, and category<br>- Additionally, it specifies the rules associated with the place, such as rule ID, description, and market ID<br>- This interface shapes the data format for retrieving place information within the project architecture.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/places/get-place/types/get-place-service-request.ts'>get-place-service-request.ts</a></b></td>
												<td>- Defines the request structure for fetching place data, specifying the required path parameter 'placeId'<br>- This code file plays a crucial role in the project's service layer by facilitating communication between the client and server for retrieving specific place information.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>get-places</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/places/get-places/get-places-service.ts'>get-places-service.ts</a></b></td>
										<td>- Retrieve places data from the API based on the provided category ID<br>- The code in the file facilitates communication with the API to fetch a list of places<br>- This service function plays a crucial role in the project by enabling the retrieval of relevant places data for further processing and display within the application.</td>
									</tr>
									</table>
									<details>
										<summary><b>types</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/places/get-places/types/get-places-service-request.ts'>get-places-service-request.ts</a></b></td>
												<td>Defines the request structure for fetching places based on category ID, ensuring consistency across service interactions within the project architecture.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/services/places/get-places/types/get-places-service-response.ts'>get-places-service-response.ts</a></b></td>
												<td>- Defines the structure for the response data returned by the Get Places service, specifying attributes such as ID, name, description, coupons, location coordinates, address, phone number, cover image, and category ID<br>- This interface shapes the format of data exchanged between the service and other components within the project architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>useCases</b></summary>
				<blockquote>
					<details>
						<summary><b>get-place</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/useCases/get-place/index.ts'>index.ts</a></b></td>
								<td>- Retrieve and map place data for the specified place ID using the getPlaceUseCase function<br>- This code interfaces with the place domain and service layers to fetch and transform place information, contributing to the project's overall functionality.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/useCases/get-place/get-place-mapper.ts'>get-place-mapper.ts</a></b></td>
								<td>Transforms data between service response and domain objects for getting a place.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>get-categories</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/useCases/get-categories/index.ts'>index.ts</a></b></td>
								<td>Retrieve and map categories from services to domain entities in the get-categories use case.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/useCases/get-categories/get-categories-mapper.ts'>get-categories-mapper.ts</a></b></td>
								<td>Transforms service response data into domain entities for categories in the project architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>get-places</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/useCases/get-places/index.ts'>index.ts</a></b></td>
								<td>- The `get-places` use case retrieves and maps place data from the service layer to the domain layer<br>- It interfaces with the `Place` domain and `getPlacesService` to fetch and transform data using the `GetPlacesMapper`<br>- This file plays a crucial role in handling the logic for fetching places based on a specified category ID.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/useCases/get-places/get-places-mapper.ts'>get-places-mapper.ts</a></b></td>
								<td>- Transforms data between service responses and domain objects for the 'get-places' functionality<br>- Maps input properties to service requests and converts service responses to domain objects<br>- This mapper plays a crucial role in maintaining separation of concerns within the codebase architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>@types</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/@types/declarations.d.ts'>declarations.d.ts</a></b></td>
						<td>Define module for PNG images with numeric value for seamless integration within the project architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>providers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/samirelhassann/nearby-app/blob/master/src/providers/query-client-provider.tsx'>query-client-provider.tsx</a></b></td>
						<td>- Creates a custom QueryClientProvider using @tanstack/react-query to manage query client instances with specific default options<br>- This component wraps its children with the QueryClientProvider, ensuring consistent query behavior across the codebase architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before you begin, make sure you have the following installed on your machine:

-  **Node.js**: Install the latest LTS version from [nodejs.org](https://nodejs.org/).
-  **Expo CLI**: You can install Expo CLI globally by running `npm install -g expo-cli` in your terminal.


###  Installation

Install nearby-app using one of the following methods:

**Build from source:**

1. Clone the nearby-app repository:
```sh
❯ git clone https://github.com/samirelhassann/nearby-app
```

2. Navigate to the api directory and install dependencies:
```sh
❯ cd nearby-app/api
```

```sh
❯ yarn install
or
❯ npm install
```

3. Navigate to mobile directory and install dependencies:
```sh
❯ cd nearby-app/mobile
```

```sh
❯ yarn install
or
❯ npm install
```




###  Usage
First, run the api:
```sh
❯ cd nearby-app/api
```
```sh
❯ yarn prisma migrate dev
```
```sh
❯ yarn start
```


Run nearby-app using the following command (another terminal):
```sh
❯ cd nearby-app/mobile
```
```sh
❯ npx expo start
```




