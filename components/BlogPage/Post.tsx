import React from 'react'
import styled from 'styled-components'
import { PostModel } from './PostModel'
interface Props {
    post: PostModel
}
export const Post = ({ post }: Props) => {
    return (
        <Wrapper>
            <Image src = {post.urlImage}/> 
            <WrapperContent>
                <Title>
                    {post.title}
                </Title>
                <Content>
                    {post.content}
                </Content>
                <DateTime>
                    {post.dateTime}
                </DateTime>
            </WrapperContent>
        </Wrapper>)
}

const Wrapper = styled.div``
const WrapperContent = styled.div``
const Image = styled.img``
const Title = styled.p``
const Content = styled.div``
const DateTime = styled.p``