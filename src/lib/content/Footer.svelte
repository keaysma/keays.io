<footer></footer>

<style lang="scss">
        footer {
                position: relative;
                display: block;
                height: 0px;
                width: 92%;
                flex-direction: row;
                align-items: center;

                margin: 2em auto 1em;

                border: 0.5px solid;
                border-color: var(--t-main);

                &::before,
                &::after {
                        display: inline;
                        color: var(--t-main);
                        content: "✺";
                        margin-top: -0.775em;
                }

                &::before {
                        float: left;
                        margin-left: -1.5em;
                }

                &::after {
                        float: right;
                        margin-right: -1.5em;
                }
        }
</style>
