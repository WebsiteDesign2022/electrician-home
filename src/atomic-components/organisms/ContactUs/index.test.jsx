import TestRenderer from 'react-test-renderer';

import ContactUs from '.';

describe("ContactUs", () => {
    test("renders ContactUs", () => {
        const contactUs = TestRenderer.create(
            <ContactUs/>
        );

        expect(contactUs.toJSON()).toMatchSnapshot();
    });
});
