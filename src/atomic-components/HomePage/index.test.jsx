import TestRenderer from 'react-test-renderer';

import HomePage from '.';

describe("HomePage", () => {
    test("renders HomePage", () => {
        const homePage = TestRenderer.create(
            <HomePage />
        );

        expect(homePage.toJSON()).toMatchSnapshot();
    });
});
