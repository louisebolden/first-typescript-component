import React from "react";
import PropTypes from "prop-types";
import {
  Stack,
  Link,
  AdminContainer as ContentContainer,
  IconWithText,
  Heading,
  Text,
} from "@futurelearn/design-system";

const CourseHeader = ({
  organisationTitle,
  title,
  code,
  imageUrl,
  imageAlt,
  runPosition,
  startTimeSentence,
  descriptionPageLink,
}) => {
  const runDetails = [
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

CourseHeader.propTypes = {
  organisationTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  runPosition: PropTypes.number,
  startTimeSentence: PropTypes.string,
  descriptionPageLink: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
};

export default CourseHeader;
