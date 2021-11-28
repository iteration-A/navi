#!/usr/bin/env node
import 'module-alias/register';
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

const cli = meow(
	`
	Usage
	  $ navi

	Options
		--name  Your name

	Examples
	  $ navi --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			name: {
				type: "string",
			},
		},
	}
);

render(<App name={cli.flags.name} />);
