# Hello VuePress

This demonstrates that the linked page works the first time in development mode but fails after a reload.

[Here is the test page](_posts/2021-08-30-test.md).
It should go to `/2021/08/30/test.html`.

# Repo steps

1. Check out this specific branch locally:
    ```
    git clone --single-branch --branch reload_bug git@github.com:Barnabas/vuepress2-demo.git
    ```
1. Install and run in development mode.
    ```
    npm install
    npm run dev:docs
    ```
1. [Go to the test page](_posts/2021-08-30-test.md), note the URL.
1. Make any change to the file `2021-08-30-test.md`. It should reload the page, instead you see a 404 not found error message. If you return to the home page, note that the URL for the test page has changed.