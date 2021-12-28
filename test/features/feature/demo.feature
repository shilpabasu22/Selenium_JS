Feature: Search

    @demo
    Scenario Outline: Search for Wdio
        Given User navigates to google
        When user searches for <search_item>
        And clicks on the first result
        Then the url is <url>
        Examples:
            | search_item | url                   |
            | Wdio        | https://webdriver.io/ |