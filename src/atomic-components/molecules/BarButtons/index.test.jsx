import TestRenderer from 'react-test-renderer';

import BarButton from '.';

describe("BarButton", () => {
    test("renders BarButton", () => {
        const barButton = TestRenderer.create(
            <BarButton />
        );

        expect(barButton.toJSON()).toMatchSnapshot();
    });
});
