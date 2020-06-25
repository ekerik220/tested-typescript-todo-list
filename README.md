## About

I wanted to learn TypeScript and get more familiar with testing with Jest and React Testing Library, so I made this todo-list application to get my hands dirty.

It's a very small application but I think I learned a lot about typescript and testing React applications. Despite being a small application I actually spent quite a while on it (not actually writing code, but reading and thinking about testing methodologies).

I decided to try the pattern described in this article (https://medium.com/@Charles_Stover/writing-testable-react-components-with-hooks-23441ee582d5). Separating the logic for each component into a hook appealed to me since it allows for 'dumb' view components. These are easy to test since you just need to pass in the state (by mocking the return value of your hook) and test to make sure the component is rendering properly.

I haven't completely decided if I like this style or not. It's easy to write tests for, but I also feel like I'm testing things in a way that isn't representative of how a user would interact with the application. I'm going to try a different style for my next project.
