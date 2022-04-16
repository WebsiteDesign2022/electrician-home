import TestRenderer from 'react-test-renderer';

import AboutUs from '.';

describe("AboutUs", () => {
    test("renders AboutUs correctly", () => {
        const aboutUs = TestRenderer.create(
            <AboutUs/>
        );

        expect(aboutUs.toJSON()).toMatchSnapshot();
    });
});
