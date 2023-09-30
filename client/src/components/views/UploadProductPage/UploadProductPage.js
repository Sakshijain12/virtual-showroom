import React, { useState } from 'react'
import { Typography, Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const roomSize = [
    { key: 1, value: "14 x 16" },
    { key: 2, value: "12 x 12" },
    { key: 3, value: "10 x 10" },
    { key: 4, value: "8 x 15" },
    { key: 5, value: "12 x 18" },
    { key: 6, value: "12 x 16" },
    { key: 7, value: "14 x 18" }
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [roomSizeValue, setRoomSizeValue] = useState("")
    const [Weight, setWeight] = useState(0)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onWeightChange = (event) => {
        setWeight(event.currentTarget.value)
    }

    const onRoomSizeSelectChange = (event) => {
        setRoomSizeValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue || !Weight ||
            !roomSizeValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            weight : Weight,
            images: Images,
            roomSize: roomSizeValue,
        }

        Axios.post('https://virtual-showroom.onrender.com/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Furniture Product</Title>
            </div>
            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Name</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price(Rs)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <label>Weight(kg)</label>
                <Input
                    onChange={onWeightChange}
                    value={Weight}
                    type="number"
                />
                <br /><br />
                <p> Room Size</p>
                <select onChange={onRoomSizeSelectChange} value={roomSizeValue}>
                    <option> {"Select"} </option>
                    {roomSize.map(item => ( 
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />
                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default UploadProductPage
