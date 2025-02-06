<footer></footer>

<style lang="scss">
        footer {
                position: relative;
                display: block;
                height: 0px;
                /*
                Can't decide if I want the width of this
                To match the width of the sections
                Or kind of "pop-out" to the page width
                */
                // width: 60rem;
                max-width: calc(92% - 2rem);

                margin: 2rem auto 1rem;

                border: 0.5px solid;
                border-color: var(--t-main);

                &::before,
                &::after {
                        display: inline;
                        color: var(--t-main);
                        content: "✺";
                        margin-top: -0.775rem;
                }

                &::before {
                        float: left;
                        margin-left: -1.5rem;
                }

                &::after {
                        float: right;
                        margin-right: -1.5rem;
                }
        }
</style>
