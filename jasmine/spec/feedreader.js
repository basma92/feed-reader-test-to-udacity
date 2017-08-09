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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it("allfeeds has a url and not empty",function(){
/*as i learned in resume  project using forEach*/
            allFeeds.forEach(function(onefeed){
         expect(onefeed.url).toBeDefined();
             expect(onefeed.url.length).not.toBe(0);
         });
            });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it("allfeeds has a name and not empty",function(){
          allFeeds.forEach(function(onefeed){
       expect(onefeed.name).toBeDefined();
           expect(onefeed.name.length).not.toBe(0);
       });
          });
    });


    /* TODO: Write a new test suite named "The menu" */
describe("menu", function() {
  /*var hidenMenu;
      beforeEach(function(){
fill instantiations hereas learned in the lessons
        hidenMenu = document.getElementsByClassName("menu-hidden");
      });*/

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
//it("menu is hidden by default", function(){
  /*as i learned in web optimization project getElementsByClassName*/
  /*i will use this var in the next test so i need to declare it out side to be visible to both tests*/
/*var hidenMenu =document.getElementsByClassName('menu-hidden');
  expect(hidenMenu).toBe("menu-hidden");
});*/
var hidenMenu =document.body;
//this didn't work with the getElementsByClassName
  var menuIcon = $(".menu-icon-link");
/*learned from forums*/
it("menu is hidden by default", function(){
/*  var hidenMenu =document.body;*/
  expect(hidenMenu.classList).toContain("menu-hidden");
});

/*it("menu is hidden by default", function(){
  hidenMenu =document.body.className;
  expect(hidenMenu).toBe("menu-hidden");
});*/

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          //this was updated using forums
          it("menu changes visibility if menu icon is clicked",function(){
          //var hidenMenu =document.getElementsByClassName("menu-hidden");
          /*var hidenMenu =document.body;
            var menuIcon = document.getElementsByClassName("menu-icon-link");*/
            menuIcon.click();
            /*the menu must be visible so menu won't be hidden*/
            expect(hidenMenu.className).not.toContain("menu-hidden");
            /*call again it must be hidden*/
            menuIcon.click();
            expect(hidenMenu.className).toContain("menu-hidden");
          });
});

  /* TODO: Write a new test suite named "Initial Entries" */
describe("Initial Entries", function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         //try my best to do it as mentioned in the lesson
         beforeEach(function(done){
//loadfeed called here and complete work before the test is done
           loadFeed(0, function(){
             done();
           });
         });
it("after loadFeed called there is at least a single entry element",function(done){
//get the entry elemnt in feed container to measure its length
  //var entry = document.getElementsByClassName("entry");
//didn't work >var entry = $(".feed").getElementsByClassName("entry").length;
var entry1 = $(".entry").length;
  expect(entry1).toBeGreaterThan(0);
done();
});
});
    /* TODO: Write a new test suite named "New Feed Selection" */
describe("New Feed Selection",function(){
  var firstloadedfeed;
  var secondloadedfeed;
  //where and how to declate these elements to compare their content
//i learned this from this projecthttps://github.com/dsbotta/feedreader-testing.git
         /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(function(done){
           loadFeed(0, function(){
         firstloadedfeed = $(".feed").html();
          loadFeed(1,function(){
            secondloadedfeed = $(".feed").html();
             done();
              });
           });
         });
         it("content changes when a new feed is loaded", function(done){
expect(firstloadedfeed).not.toEqual(secondloadedfeed);
done();
         });
       });
}());
