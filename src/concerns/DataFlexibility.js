import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import dynamoDocs1 from '../assets/screen-shots/dynamo-docs-1.png';
import dynamoDocs2 from '../assets/screen-shots/dynamo-docs-2.png';

const AccessPatterns = () => (
	<div>
		<Typography variant="h6">
			Using the <code className="code-block">institutionId</code> as the partition key could lead to
			diminished performance.
			<br /> Once the product goes live, changes to the architecture cannot be made, and new ways to
			access seemingly relational data cannot be created without great effort.
		</Typography>
		<Divider className="divider" />

		<Typography variant="h6" className="spacer">
			Brief, High Level Overview of How Data is Stored on DynamoDB
		</Typography>
		<Typography variant="body1" className="spacer bottom-spacer">
			DynamoDb takes advantage of clusters. Clusters are separated stores of data that are
			determined by your <strong className="code-block">partition key</strong>.<br />
			The more similiar the keys, the more likely that they will be stored on the same partition.
			<br />
		</Typography>
		<Typography variant="body1" component="div" className="spacer bottom-spacer">
			<a
				href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-uniform-load.html"
				target="_blank"
				rel="noopener noreferrer"
				className="blue-link"
			>
				Here
			</a>{' '}
			is a link on best practices when choosing a key.
			<br />
			<br />
			<a
				href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-general-nosql-design.html#bp-general-nosql-design-concepts"
				target="_blank"
				rel="noopener noreferrer"
				style={{ color: 'blue' }}
			>
				Here
			</a>
			&nbsp; is another on the importance of{' '}
			<span style={{ backgroundColor: 'yellow' }}>
				understanding business concerns before moving forward with your table design.
			</span>
			<br />
			<br />
			<div className="bottom-spacer">The links go on to say</div>
			<img height="250" src={dynamoDocs1} alt="dynanmo docs" />
			<br />
			<br />
			<div className="bottom-spacer">The AWS Docs go on to say</div>
			<div>
				<img height="50" src={dynamoDocs2} alt="dynanmo docs" />
			</div>
			<div>
				This application today does <strong className="code-block">not</strong> utilize secondary
				keys.
			</div>
		</Typography>
		<Typography variant="h6" className="spacer">
			Why This Needs Attention
		</Typography>
		<Typography variant="body1" className="block-text">
			When using an <code className="code-block">institutionId</code> to partition, you have a key
			that does not have variation, which is a potential source of a performance slow down.
			<br />
			<br />
			The more popular one institution gets, the slower their performance will be, due to having to
			look through several more records than the other FI's. <br />
			More and more records will be associated with that particular FI, which in turn will mean that
			DynamoDB will partition those records on the same shard, rather than spaced out for quick
			access.
		</Typography>
		<Typography variant="h6" className="spacer">
			How it Impacts the Business
		</Typography>
		<Typography variant="body1" className="block-text">
			As one financial institution grows, their performance will diminish. This leads to their
			eventual dissatisfaction, and a potential restructuring of the data.
		</Typography>
		<Typography variant="h6" className="spacer">
			Potential Improvements
		</Typography>
		<Typography variant="body1" className="block-text">
			Partition keys could be an email address used in conjuction with additional keys such as the
			FI's ID.
			<br />
			<br />A better understanding of the goals and purpose of this application would allow a better
			alternative to be presented.
		</Typography>
	</div>
);

export default AccessPatterns;
