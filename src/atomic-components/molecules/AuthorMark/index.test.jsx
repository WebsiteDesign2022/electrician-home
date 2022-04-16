import TestRenderer from 'react-test-renderer';

import AuthorMark from '.';

describe("AuthorMark", () => {
    test("renders AuthorMark", () => {
        const authorMark = TestRenderer.create(
            <AuthorMark text="author-mark-text" />
        );

        expect(authorMark.toJSON()).toMatchSnapshot();
    });
});
