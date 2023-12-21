import { SwirlIconLock } from "@getflip/swirl-components-react";
import { ApiEndpoint } from "@swirl/lib/docs";
import classNames from "classnames";
import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import { Heading, LinkedHeading, Text } from "src/components/swirl-recreations";
import { Tag } from "../Tags";
import { Parameter } from "./Parameter";
import { EndpointParameterFactory } from "./ParameterFactory";

interface EndpointDescription {
  endpoint: ApiEndpoint;
  endpointId?: string;
  path: string;
}

export const EndpointDescription: FunctionComponent<EndpointDescription> = ({
  endpoint,
  endpointId,
  path,
}) => {
  const requestbody = endpoint.requestBody?.find(
    (parameterType) => parameterType.type === "body"
  );

  const otherParameters = endpoint.parameters?.filter(
    (parameterType) => parameterType.type !== "body"
  );

  return (
    <div className="max-w-full md:max-w-[37.5rem] overflow-x-auto">
      <LinkedHeading href={path}>
        <Heading level={2} id={endpointId}>
          {endpoint.title}
          {endpoint.isDeprecated && (
            <span className="ml-2 inline-flex">
              <Tag content="deprecated" scheme="warning" />
            </span>
          )}
          {endpoint.isExperimental && (
            <span className="ml-2 inline-flex">
              <Tag content="experimental" scheme="warning" />
            </span>
          )}
          {endpoint.isInternal && (
            <span className="ml-2 inline-flex">
              <Tag content="internal" scheme="info" />
            </span>
          )}
        </Heading>
      </LinkedHeading>
      {endpoint.security?.length && (
        <div className="mb-space-16">
          <p className="mb-space-8 flex gap-space-4 text-font-size-sm font-font-weight-medium text-text-critical">
            <SwirlIconLock className="mt-[1px]" size={16} /> Requires
            authentication via {Object.keys(endpoint.security[0])[0]}.
          </p>
        </div>
      )}
      <ReactMarkdown
        className="text-base mb-6"
        components={{
          p: (props) => <Text {...props} size="sm" />,
          code: (props) => (
            <code
              className="max-w-full bg-gray-100 rounded-md p-[2px] text-sm font-font-family-code break-words"
              {...{ ...props, inline: "inline" }}
            />
          ),
        }}
      >
        {endpoint.description}
      </ReactMarkdown>
      <div className="mb-6">
        {otherParameters?.map((parameterType, index) => {
          const parameterFactory = new EndpointParameterFactory(
            parameterType.parameters
          );

          return (
            <div key={`${parameterType.title}-${index}`} className="mb-6">
              <Heading level={3} className="mb-2">
                {parameterType.title}
              </Heading>
              <div>{parameterFactory.renderProperties()}</div>
            </div>
          );
        })}

        {requestbody && (
          <div className="mb-6">
            <Heading level={3} className="mb-2">
              Request Body
            </Heading>
            <div>
              {requestbody &&
                new EndpointParameterFactory(
                  requestbody.parameters
                ).renderProperties()}
            </div>
          </div>
        )}

        {endpoint.responseBodySchemas.length && (
          <div className="mb-6">
            <Heading level={3} className="mb-2">
              Response Body
            </Heading>
            <div>
              {endpoint.responseBody?.map((parameterType) => {
                const schema = endpoint.responseBodySchemas.find(
                  (schema) => schema.statusCode === parameterType.title
                )?.schema;

                return (
                  <Parameter
                    key={parameterType.title}
                    name={parameterType.title}
                  >
                    {new EndpointParameterFactory(
                      parameterType.parameters,
                      schema
                    ).renderProperties()}
                  </Parameter>
                );
              })}
            </div>
          </div>
        )}

        {!!endpoint.globalErrorCodes?.length && (
          <div className="mb-6">
            <Heading level={3} className="mb-2">
              Error Codes
            </Heading>
            <ul>
              {endpoint.globalErrorCodes?.map((errorCode) => (
                <li
                  key={errorCode}
                  className={classNames(
                    "font-font-family-code font-bold",
                    "border-border-1 border-border-default p-4",
                    "first-of-type:rounded-t-border-radius-sm last-of-type:rounded-b-border-radius-sm",
                    "border-b-0 last-of-type:border-border-1",
                    "only:rounded-border-radius-sm only:border-border-1"
                  )}
                >
                  {errorCode}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
