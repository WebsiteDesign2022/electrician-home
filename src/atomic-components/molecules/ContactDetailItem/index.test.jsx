import TestRenderer from 'react-test-renderer';

import ContactDetailItem from '.';

describe("ContactDetailItem", () => {
    test("renders ContactDetailItem given empty", () => {
        const contactDetailItem = TestRenderer.create(
            <ContactDetailItem />
        );

        expect(contactDetailItem.toJSON()).toMatchSnapshot();
    });

    test("renders ContactDetailItem given non-empty content", () => {
        const contactDetailItem = TestRenderer.create(
            <ContactDetailItem />
        );

        expect(contactDetailItem.toJSON()).toMatchSnapshot();
    });
});
