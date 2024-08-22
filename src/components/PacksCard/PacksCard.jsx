import { Button, Card, CardGroup, Container } from "react-bootstrap"



const PacksCard = ({ packs }) => {

    const titles = Object.keys(packs)

    const { basic, premium, glam } = packs


    return (
        <div className="PackCard">
            <Container>
                <CardGroup className="mb-4">

                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4" >{titles[0].toUpperCase()}</Card.Title>
                            <Button variant="dark">Make your reservation</Button>
                            <hr />
                            <Card.Text>
                                {basic.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4">{titles[1].toUpperCase()}</Card.Title>
                            <Button variant="dark">Make your reservation</Button>
                            <hr />
                            <Card.Text>
                                {premium.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4">{titles[2].toUpperCase()}</Card.Title>
                            <Button variant="dark">Make your reservation</Button>
                            <hr />
                            <Card.Text>
                                {glam.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </CardGroup>
            </Container>
        </div>
    )
}

export default PacksCard