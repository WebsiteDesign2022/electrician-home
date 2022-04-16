import TestRenderer from 'react-test-renderer';

import FrontPageHero from '.';

describe("FrontPageHero", () => {
    test("renders FrontPageHero", () => {
        const frontPageHero = TestRenderer.create(
            <FrontPageHero/>
        );

        expect(frontPageHero.toJSON()).toMatchSnapshot();
    });
});
