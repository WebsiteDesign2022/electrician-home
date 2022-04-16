import TestRenderer from 'react-test-renderer';

import SectionDivider from '.';

describe("SectionDivider", () => {
    test("renders SectionDivider", () => {
        const sectionDivider = TestRenderer.create(
            <SectionDivider/>
        );

        expect(sectionDivider.toJSON()).toMatchSnapshot();
    });
});
