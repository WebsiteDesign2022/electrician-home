import TestRenderer from 'react-test-renderer';

import TopLeftTriangle from '.';

describe("TopLeftTriangle", () => {
    test("renders TopLeftTriangle", () => {
        const topLeftTriangle = TestRenderer.create(
            <TopLeftTriangle />
        );

        expect(topLeftTriangle.toJSON()).toMatchSnapshot();
    });
});
