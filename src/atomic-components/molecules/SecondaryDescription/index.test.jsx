import TestRenderer from 'react-test-renderer';

import SecondaryDescription from '.';

describe("SecondaryDescription", () => {
    test("renders SecondaryDescription without text and matches snapshot", () => {
        const secondaryDescription = TestRenderer.create(
            <SecondaryDescription/>
        );

        expect(secondaryDescription.toJSON()).toMatchSnapshot();
    });

    test("renders SecondaryDescription with text and matches snapshot", () => {
        const secondaryDescription = TestRenderer.create(
            <SecondaryDescription text="secondary-description-text"/>
        );

        expect(secondaryDescription.toJSON()).toMatchSnapshot();
    });
});
