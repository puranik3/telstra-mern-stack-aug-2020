# What is React?
- A JS library
- Facebook and Instagram
- 2011 is born, 2013 is made open-source
- Frontend development
    - Very easy to build and maintain the frontend
    - To create web pages (dynamic)
    - Single Page Application (SPA)
- Alternatives
    - Angular (2009) - Almost as popular as React - popularity is decreasing
    - Vue.js (2015) - upcoming. Definitely something to look out for
    - Svelte
- DOM manipulations are "managed" for you
    - DOM manipulations are slow operations - we want to optimize DOM maipulations
    - The "data in the DOM" is backed up by data in your application
        - The data in the DOM can get out-of-sync with data in your application
        - When the data that backs up the data in the DOM changes, the DOM manipulations are automatically done and they reflect the latest data
- Single Page Applications (SPA)
    - rendering till about 2009 was all server-side (construct HTML using template + data on the server-side and send it as response)
    - Client-side rendering (templates + data are sent to browser - browser constructs the DOM and renders on the page)
        - single HTML page
            - all assets are fetched when this first HTML page loads - templates for all pages in the app, CSS, JS etc.
        - Advantage of SPA - It is fast after the first page loads (all assets for all other pages are also fetched along with first page)
        - Disadvantage of SPA - First page load is slow
        - Data is fetched as and when needed
- Component-based
    - custom HTML element - like StyledButton (components)
    - customize the HTML elements using custom attributes (props)
    ```
    <Panel>
        <PanelHeading>What is React?</PanelHeading>
        <PanelBody>What is React?</PanelBody>
    <Panel>

    <StyledButton icon="eye" text="unwatch" label="1" />
    <StyledButton icon="star" text="star" label="2" />
    
    instead of...
    
    <span class="styled-button">
        <span class="styled-button-icon">
            <img src="" />
        </span>
        <span>unwatch</span>
        <span>1</span>
    </span>
    
    <span class="styled-button">
        <span class="styled-button-icon">
            <img src="" />
        </span>
        <span>star</span>
        <span>2</span>
    </span>
    ```