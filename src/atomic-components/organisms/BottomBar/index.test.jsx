import TestRenderer from 'react-test-renderer';

import BottomBar from '.';

describe("BottomBar", () => {
    test("renders BottomBar", () => {
        const bottomBar = TestRenderer.create(
            <BottomBar/>
        );

        expect(bottomBar.toJSON()).toMatchSnapshot();
    });
});
