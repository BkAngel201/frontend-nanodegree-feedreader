/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined.', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Every Object has an URL and it is not empty.', function() {
           // run through each object into allfeeds with forEach function
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              // used trim function to prevent empty spaces to be taken as actual text
              // since the comparison is against ""
              expect(feed.url.trim()).not.toEqual("");
            });
         });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Every Object has a NAME and it is not empty.', function() {
           // run through each object into allfeeds with forEach function
            allFeeds.forEach(function(feed) {
              expect(feed.name).toBeDefined();
              // used trim function to prevent empty spaces to be taken as actual text
              // since the comparison is against ""
              expect(feed.name.trim()).not.toEqual("");
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The Menu", function() {

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it("Menu Element is hidden by default.", function() {
         // menu-hidden class on body hide the menu
         expect($("body").attr("class")).toBe("menu-hidden");
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it("Menu Element change it visibility when the menu icon is clicked.", function() {
          // triggered the click event and check if the class menu-hidden on body is not there
          $('.menu-icon-link').trigger("click");
          expect($("body").attr("class")).not.toBe("menu-hidden");
          // triggered again the click event and check if the class menu-hidden is there again
          $('.menu-icon-link').trigger("click");
          expect($("body").attr("class")).toBe("menu-hidden");
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
            loadFeed(0, function() {
              done();
            });
         });
         it("Every .feed Container has at least 1 .entry to show on loadFeed() call.", function() {
           expect($(".feed .entry").length).toBeGreaterThan(0);
         });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         let feedContent = $(".feed").html();
         beforeEach(function(done) {
            loadFeed(0, function() {
              done();
            });
         });
         it(".feed Container change it content on every loadFeed() call.", function() {
           expect($(".feed").html()).not.toBe(feedContent);
         });
    });
}());
