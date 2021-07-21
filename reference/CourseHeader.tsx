import React from "react";
import {
  Stack,
  Link,
  AdminContainer as ContentContainer,
  IconWithText,
  Heading,
  Text,
} from "@futurelearn/design-system";

type Props = {
  code: string;
  description: string;
  descriptionPageLink: { href: string; text: string };
  imageAlt: string;
  imageUrl: string;
  organisationTitle: string;
  runPosition?: number;
  startTimeSentence: string;
  title: string;
};

const CourseHeader = ({
  organisationTitle,
  title,
  code,
  imageUrl,
  imageAlt,
  runPosition,
  startTimeSentence,
  descriptionPageLink,
}: Props) => {
  const runDetails: string[] = [
    runPosition ? `Run ${runPosition}` : "",
    startTimeSentence,
  ].filter(Boolean);

  return (
    <ContentContainer isWide>
      <Stack spacing="2">
        <Text isBold isInline size="xsmall">
          {organisationTitle}
        </Text>
        {code && (
          <Text isInline size="xsmall">
            {" "}
            {code}
          </Text>
        )}
        <Heading elName="h1" size="xlarge">
          {title}
        </Heading>
        {runDetails.length > 0 && (
          <Text size="medium">{runDetails.join(" - ")}</Text>
        )}
        {descriptionPageLink && (
          <Link href={descriptionPageLink.href} size="small">
            <IconWithText icon="preview" text={descriptionPageLink.text} />
          </Link>
        )}
      </Stack>
      <img src={imageUrl} alt={imageAlt} />
    </ContentContainer>
  );
};

export default CourseHeader;
