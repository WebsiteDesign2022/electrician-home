import TestRenderer from 'react-test-renderer';

import ContactDetailItem from '.';

describe("ContactDetailItem", () => {
    test("renders ContactDetailItem", () => {
        const contactDetailItem = TestRenderer.create(
            <ContactDetailItem />
        );

        expect(contactDetailItem.toJSON()).toMatchSnapshot();
    });
});
