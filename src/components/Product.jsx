import { useState } from "react";
import {
	Card,
	Stack,
	Image,
	Heading,
	Divider,
	ButtonGroup,
	Button,
	Text,
	CardBody,
	CardFooter,
	Box,
	SimpleGrid,
} from "@chakra-ui/react";

const Product = ({ product }) => {
	const { id, title, price, description, image, category, rating } = product;
	const [isReadMore, setIsReadMore] = useState(false);

	return (
		<>
			<Card size="md" maxW="sm">
				<CardBody>
					<Image
						maxH={300}
						mx="auto"
						fallbackSrc="https://via.placeholder.com/150"
						objectFit="contain"
						src={image}
						alt={description}
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">{title}</Heading>
						{!isReadMore ? (
							<Text>
								{description.substring(0, 100)}...
								<button
									className="readmore"
									onClick={() => setIsReadMore(!isReadMore)}
								>
									Read more
								</button>
							</Text>
						) : (
							<Text>
								{description}
								<button
									className="readmore"
									onClick={() => setIsReadMore(!isReadMore)}
								>
									Read less
								</button>
							</Text>
						)}
						<Text color="blue.600" fontSize="2xl">
							${price}
						</Text>
						<Text color="black" fontSize="xs">
							{rating.rate}
							<p>{rating.count}</p>
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter>
					<ButtonGroup spacing="2">
						<Button variant="solid" colorScheme="blue">
							Buy now
						</Button>
						<Button variant="ghost" colorScheme="blue">
							Add to cart
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
			<Divider />
		</>
	);
};

export default Product;
